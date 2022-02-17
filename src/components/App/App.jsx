import { useState, useEffect } from "react";
import Cardlist from "../Cardlist/Cardlist";
import Searchbox from "../Searchbox/Searchbox";
import Scroll from "../Scroll/Scroll";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

import "tachyons";
import "./App.css";

const App = () => {
  const [megas, setMegas] = useState([]);
  const [searchfield, setSearchfield] = useState("");
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setMegas(data))
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }
  
  const filteredMegas = megas.filter(megaX => {
    return megaX.name.toLowerCase()
        .includes(searchfield.toLowerCase());
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

export default App
