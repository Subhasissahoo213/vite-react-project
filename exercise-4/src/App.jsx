import React from "react";
import Card from "./components/card";

function App() {
  const features = [
     {
      title: "JSX",
      description: "JSX allows you to write HTML inside JavaScript easily."
    },
    {
      title: "Components",
      description: "Components let you split your UI into reusable pieces."
    },
    {
      title: "State & Props",
      description: "State and props help manage dynamic data in your app."
    }
  ];
  return (
    <div style={{padding: "20px" }}>
      <h1>React Features</h1>
      {features.map((features, index)=> (
        <Card
        key={index}
        title={features.title}
        description={features.description}
        />
      ))}
    </div>
  );
}
export default App;