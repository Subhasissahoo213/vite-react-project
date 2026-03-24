import React from "react";

function App() {

  const fruits = ["Apple", "Banana", "Mango"]; 

  return (
    <div> 
      <h2>My Fruit List</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;