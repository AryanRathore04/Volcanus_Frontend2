import React, { useState } from "react";
// import Person from './components/Person'
import { Data } from "./Data";

const App = () => {
  const [images, setimages] = useState(Data);

  const filterbyCategory = (cat) => {
    const result = Data.filter((item) => item.catagory == cat);
    setimages(result);
    console.log("image result = ", result);
  };
  return (
    <>
      <div className="button">
        <button onClick={() => filterbyCategory("London")}>London</button>
        <button onClick={() => filterbyCategory("Paris")}>Paris</button>
        <button onClick={() => filterbyCategory("New York")}>New York</button>
        <button onClick={() => filterbyCategory("Tokyo")}>Tokyo</button>
      </div>

      {/* <Person /> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {images.map((item) => (
          <div style={{ padding: "10px" }} key={item.id}>
            <img
              style={{
                width: "400px",
                height: "250px",
                border: "5px solid tan",
                borderRadius: "20px",
              }}
              src={item.imgSrc}
              alt=""
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
