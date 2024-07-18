import React, { useState } from 'react'
import { data } from './data'

const App = () => {
  const [movies, setmovies] = useState(data)

  const filterbyCategory = (cat) => {
    const result = data.filter((item) => item.catagory === cat)
    setmovies(result)
    console.log(result)
  }
  return (
    <>
      <div className="button">
        <button onClick={() => filterbyCategory("Action")}>Action</button>
        <button onClick={() => filterbyCategory("Romance")}>Romance</button>
        <button onClick={() => filterbyCategory("Drama")}>Drama</button>
        <button onClick={() => filterbyCategory("Sci-Fi")}>Sci-Fi</button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {movies.map((item) => (
          <div style={{ padding: "10px" }} key={item.id}>
            <img style={{ width: "200px" }} src={item.imgSrc} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}

export default App