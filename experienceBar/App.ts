import React from "react";
import "./App.css";
import experienceBar from "./experienceBar";

const precentage = [
  { bgcolor: "#ef6c00", completed: 5 },
  { bgcolor: "#ef6c00", completed: 10 },
  { bgcolor: "#ef6c00", completed: 15 },
  { bgcolor: "#ef6c00", completed: 20 },
  { bgcolor: "#ef6c00", completed: 25 },
  { bgcolor: "#ef6c00", completed: 30 },
  { bgcolor: "#ef6c00", completed: 35 },
  { bgcolor: "#ef6c00", completed: 40 },
  { bgcolor: "#ef6c00", completed: 45 },
  { bgcolor: "#ef6c00", completed: 50 },
  { bgcolor: "#ef6c00", completed: 55 },
  { bgcolor: "#ef6c00", completed: 60 },
  { bgcolor: "#ef6c00", completed: 65 },
  { bgcolor: "#ef6c00", completed: 70 },
  { bgcolor: "#ef6c00", completed: 75 },
  { bgcolor: "#ef6c00", completed: 80 },
  { bgcolor: "#ef6c00", completed: 85 },
  { bgcolor: "#ef6c00", completed: 90 },
  { bgcolor: "#ef6c00", completed: 95 },
  { bgcolor: "#ef6c00", completed: 100 },
];

function App() {
  return (
    <div className=App>
      {precentage.map((item, idx) => (
        <experienceBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
      ))}
    </div>
  );
}

export default App;
