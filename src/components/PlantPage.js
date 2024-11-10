import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage(){
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  //this adds a new plant to the PlantList
  function handleAddPlant(newPlant){
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  }

  const filteredPlants = plants.filter((plant) => {
      //Convert the plant name to lowercase for ease in searching
      plant.name.toLowerCase().includes(searchTerm.toLowerCase())
    }
  );

  return(
    //render the NewPlantForm, Search bar and PlantList 
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchTerm={searchTerm} onSearch={setSearchTerm} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
