import React from "react"
import Card from "../Card/Card";

function Cardlist({megas}) {
  return (
    <div>
        {/* <div>Hello</div> */}
        {
          megas.map(megaX => <Card key={megaX.id} 
            id={megaX.id}
            name={megaX.name}
            email={megaX.email} 
          />)
        }
    </div>
  );
}

export default Cardlist;