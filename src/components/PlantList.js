// import React from "react";
// import PlantCard from "./PlantCard";

// function PlantList({ plants }) {
//   return (
//     <ul className="cards">
//       {plants.map((plant) => (
//         <PlantCard key={plant.id} plant={plant} />
//       ))}
//     </ul>
//   );
// }

// export default PlantList;

import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onUpdatePlant, onDeletePlant }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant.id}
          plant={plant}
          onUpdatePlant={onUpdatePlant}
          onDeletePlant={onDeletePlant}
        />
      ))}
    </ul>
  );
}

export default PlantList;
