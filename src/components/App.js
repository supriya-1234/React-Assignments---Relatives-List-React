import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {
        const relatives = ["Ruby", "Alok", "Akash", "Jyoti"];
        return(
            <>
               {/* Do not remove the main div */}
               <ol key="relativeList">
          {this.relatives.map((relative, index) => (
          {relatives.map((relative, index) => (
            <li key={"relativeListItem" + (index + 1)}>{relative}</li>
          ))}

            </>
        );
    }
}


export default App;
