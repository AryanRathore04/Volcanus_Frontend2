import React, { useEffect, useState } from "react";

const MealDB = () => {
  const [mealDB, setmealDB] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      const api = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const data = await api.json();
      setmealDB(data.categories);
      console.log(data.categories);
    };

    FetchData();
  }, []);

  return (
    <>
      <div>
        {mealDB?.map((item) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              border: "4px solid white",
              width: "50%",
              gap: "1rem",
            }}
            key={item.idCategory}
          >
            <h1>{item.strCategory}</h1>
            <img src={item.strCategoryThumb} alt="" />
            <p style={{ width: "50%" }}>{item.strCategoryDescription}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MealDB;
