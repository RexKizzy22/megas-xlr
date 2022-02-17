import { useEffect } from "react";
import Cardlist from "../Cardlist/Cardlist";
import Searchbox from "../Searchbox/Searchbox";
import Scroll from "../Scroll/Scroll";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { setSearchField, fetchMegas } from "../../action";

import { connect } from "react-redux";

import "tachyons";
import "./App.css";

const mapStateToProps = state => {
  return {
    searchField: state.searchMegas.searchField,
    megas: state.requestMegas.megas,
    isPending: state.requestMegas.isPending,
    error: state.requestMegas.error
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestMegas: () => dispatch(fetchMegas())
  }
}

const App = ({searchField, onSearchChange, megas, onRequestMegas}) => {
  
  useEffect(() => {
    onRequestMegas();
  }, []);
    
    const filteredMegas = megas.filter(megaX => {
      return megaX.name.toLowerCase()
      .includes(searchField.toLowerCase());
    });
    
    return (
      <div className="tc">
      <h1 className="f1">Megas-XLR</h1>
      <Searchbox onSearch={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <Cardlist 
            megas={filteredMegas} 
          />  
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
