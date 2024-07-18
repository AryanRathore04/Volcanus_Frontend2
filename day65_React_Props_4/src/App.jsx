import React from "react";
import Person from "./Person";
import Counter from "./Counter";

const App = () => {

  const darkMode = () => {
    document.body.style.backgroundColor = "rgb(27, 20, 20)";
    document.body.style.color = "rgb(255, 251, 196)";
  }
  const lightMode = () => { 
    document.body.style.backgroundColor = "rgb(255, 251, 196)";
    document.body.style.color = "rgb(27, 20, 20)";
  }
  return (
    <>
      <div>
        {/* <h1>Events</h1> */}
        {/* <Person 
        name="John" 
        age="25" 
        location="USA"
        FavColor = "Red"
        FavTeam = "India" />
        <Person 
        name="Doe" 
        age="30" 
        location="UK"
        FavColor = "Yellow"
        FavTeam ="Austrilia" />
        <Person 
        name="Smith" 
        age="35" 
        location="AUS" /> */}
        {/* <button onClick={darkMode}>DarkMode</button>
        <button onClick={lightMode}>LightMode</button> */}

        <Counter />
      </div>
    </>
  );
};

export default App;
