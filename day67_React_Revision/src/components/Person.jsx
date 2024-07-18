import React from "react";
import "./person.css";

const Person = () => {
  const person = {
    name: "Aryan",
    age: 19,
    salary: 10000000,
    location: "Japan",
  };

  //  Internal CSS
  //  const myStyle = {
  //     backgroundColor: "yellow",
  //  }

  const { name, age, salary, location } = person;
  return (
    <>
      <div
      //   style={{myStyle}}
      >
        <h1>Revision</h1>
        <h1>{name}</h1>
        <br />
        {age > 18 ? (
          <>
            <h3>You can drive</h3>
            <p>yes you can</p>
          </>
        ) : (
          <>
            <h3>You can not drive</h3>
            <p>Please Don't Drive</p>
          </>
        )}
        <br />
        <h1>{salary}</h1>
        <br />
        <h1> {location}</h1>
      </div>
    </>
  );
};

export default Person;
