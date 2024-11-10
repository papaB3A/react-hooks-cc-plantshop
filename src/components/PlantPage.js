// import React, { useState, useEffect } from "react";
// import NewPlantForm from "./NewPlantForm";
// import PlantList from "./PlantList";
// import Search from "./Search";

// function PlantPage() {
//   const [plants, setPlants] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   // Fetch data from the backend at port 6001
//   useEffect(() => {
//     fetch("http://localhost:6001/plants")
//       .then((res) => res.json())
//       .then((data) => setPlants(data));
//   }, []);

//   //this adds a new plant to the plants array
//   function handleAddPlant(newPlant) {
//     setPlants((prevPlants) => [...prevPlants, newPlant]);
//   }

//   const filteredPlants = plants.filter((plant) =>
//     //Convert the plant name to lowercase for ease in searching
//     plant.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return(
//     //render the NewPlantForm, Search bar and PlantList 
//     <main>
//       <NewPlantForm onAddPlant={handleAddPlant} />
//       <Search searchTerm={searchTerm} onSearch={setSearchTerm} />
//       <PlantList plants={filteredPlants} />
//     </main>
//   );
// }

// export default PlantPage;

import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch data from the backend
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  function handleAddPlant(newPlant) {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  }

  function handleUpdatePlant(updatedPlant) {
    setPlants((plants) =>
      plants.map((plant) =>
        plant.id === updatedPlant.id ? updatedPlant : plant
      )
    );
  }

  function handleDeletePlant(id) {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    }).then(() => {
      setPlants((plants) => plants.filter((plant) => plant.id !== id));
    });
  }

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchTerm={searchTerm} onSearch={setSearchTerm} />
      <PlantList
        plants={filteredPlants}
        onUpdatePlant={handleUpdatePlant}
        onDeletePlant={handleDeletePlant}
      />
    </main>
  );
}

export default PlantPage;

