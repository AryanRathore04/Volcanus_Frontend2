import React from 'react'

const Person = ({name,age,location,FavColor,FavTeam}) => {

    
  return (
    <>
      <h1>Person Component</h1>
      <div
        style={{
          backgroundColor: "lightblue",
          padding: "10px",
          margin: "10px",
          borderRadius: "10px",
          color: "black",
        }}
      >
        <h4>Name:- {name}</h4>
        <h4>Age:- {age}</h4>
        <h4>Location:- {location}</h4>
        {FavColor ? <h4>FavColor:- {FavColor}</h4> : " "}
        {FavTeam && <h4>FavTeam:- {FavTeam}</h4>}
      </div>
    </>
  );
}

export default Person