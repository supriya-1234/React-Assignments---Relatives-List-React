import React from "react";
import "../styles/App.css";

export default function App() {
  const relatives = ["Ruby", "Alok", "Akash", "Jyoti"];
  return (
    <div id="main">
      <ol key="relativeList">
        {relatives.map((relative, index) => (
          <li key={`relativeListItem${index + 1}`}>{relative}</li>
        ))}
      </ol>
    </div>
  );
}
