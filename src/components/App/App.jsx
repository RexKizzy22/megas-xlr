import { Component } from "react";
import Cardlist from "../Cardlist/Cardlist";
import Searchbox from "../Searchbox/Searchbox";
import Scroll from "../Scroll/Scroll";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

import "tachyons";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchfield: "",
      megas: []
    };
  }

  componentDidMount = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({megas: data}))
    
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }
  
  render() {
    const filteredMegas = this.state.megas.filter(megaX => {
      return megaX.name.toLowerCase()
          .includes(this.state.searchfield.toLowerCase());
    });
  
    return (
      <div className="tc">
        <h1 className="f1">Megas-XLR</h1>
        <Searchbox onSearch={this.onSearchChange} />
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
}

export default App
