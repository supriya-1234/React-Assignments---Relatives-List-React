import React from "react";
import "../styles/App.css";
const relatives = ["Ruby", "Alok", "Akash", "Jyoti"];
export default function App() {
  return (
    <>
      <ol key="relativeList">
        {this.relatives.map((relative, index) => (
          <li key={"relativeListItem" + (index + 1)}>{relative}</li>
        ))}
      </ol>
    </>
  );
}
