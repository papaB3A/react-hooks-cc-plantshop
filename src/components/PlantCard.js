import React, {useState} from "react";

function PlantCard({ plant }){
  //create a isSoldOut state...initalized to false
  const [isSoldOut, setIsSoldOut] = useState(false);

  function handleToggleStock(){
    //when clicked
    setIsSoldOut(!isSoldOut);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      <button onClick={handleToggleStock} className={isSoldOut ? "" : "primary"}>
        {isSoldOut ? "Out of Stock" : "In Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
