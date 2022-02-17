import React from "react"
import Card from "../Card/Card";

const Cardlist = ({megas}) => {
  if (!true) throw new Error("Error Boundary test");
  
  return (
    <div>
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
