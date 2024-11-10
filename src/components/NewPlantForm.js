// import React from "react";

// function NewPlantForm() {
//   return (
//     <div className="new-plant-form">
//       <h2>New Plant</h2>
//       <form>
//         <input type="text" name="name" placeholder="Plant name" />
//         <input type="text" name="image" placeholder="Image URL" />
//         <input type="number" name="price" step="0.01" placeholder="Price" />
//         <button type="submit">Add Plant</button>
//       </form>
//     </div>
//   );
// }

// export default NewPlantForm;

import React, { useState } from "react";

function NewPlantForm({ onAddPlant }){
  const [formData, setFormData] = useState({name: "", image: "", price: ""});

  function handleChange(e){
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleSubmit(e){
    //prevent the default submission of the form
    e.preventDefault();

    fetch("/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)//convert the formData object to a string to be interpreted by the server
    })
      .then((res) => res.json())
      .then((newPlant) => {
        onAddPlant(newPlant);
        setFormData({ name: "", image: "", price: "" });
      });
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name"
          placeholder="Plant name" value={formData.name}
          onChange={handleChange}
        />

        <input
          type="text" name="image"
          placeholder="Image URL" value={formData.image}
          onChange={handleChange}
        />

        <input
          type="number" name="price"
          step="0.01" placeholder="Price"
          value={formData.price} onChange={handleChange}
        />
        
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
