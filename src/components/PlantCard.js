// import React, {useState} from "react";

// function PlantCard({ plant }){
//   //create a isSoldOut state...initalized to false
//   const [isSoldOut, setIsSoldOut] = useState(false);

//   function handleToggleStock(){
//     //when clicked
//     setIsSoldOut(!isSoldOut);
//   }

//   return (
//     <li className="card" data-testid="plant-item">
//       <img src={plant.image} alt={plant.name} />
//       <h4>{plant.name}</h4>
//       <p>Price: ${plant.price}</p>
//       <button onClick={handleToggleStock} className={isSoldOut ? "" : "primary"}>
//         {isSoldOut ? "Out of Stock" : "In Stock"}
//       </button>
//     </li>
//   );
// }

// export default PlantCard;

import React, { useState } from "react";

function PlantCard({ plant, onUpdatePlant, onDeletePlant }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newPrice, setNewPrice] = useState(plant.price);
  const [isSoldOut, setIsSoldOut] = useState(false); 

  function handleEditClick() {
    setIsEditing(true);
  }

  function handlePriceChange(e) {
    setNewPrice(e.target.value);
  }

  function handleSaveClick() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ price: parseFloat(newPrice) }),
    })
      .then((res) => res.json())
      .then((updatedPlant) => {
        onUpdatePlant(updatedPlant);
        setIsEditing(false);
      });
  }

  function handleSoldOutToggle() {
    setIsSoldOut((prevSoldOut) => !prevSoldOut);
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${isEditing ? (
        <input
          type="number"
          value={newPrice}
          onChange={handlePriceChange}
          step="0.01"
        />
      ) : (
        plant.price
      )}</p>
      {isEditing ? (
        <button className="primary" onClick={handleSaveClick}>Save</button>
      ) : (
        <button className="primary" onClick={handleEditClick}>Edit Price</button>
      )}
      <button  className={isSoldOut ? "" : "primary"} onClick={handleSoldOutToggle}>
        {isSoldOut ? "Out of Stock" : "In Stock"}
      </button>
      <button className="primary" onClick={() => onDeletePlant(plant.id)}>Delete</button>
    </li>
  );
}

export default PlantCard;