// https://www.themealdb.com/api/json/v1/1/categories.php

const fetchData = async () => {
  const api = await fetch(
    "https://themealdb.com/api/json/v1/1/filter.php?a=american"
  );

  const data = await api.json();
  console.log(data.meals);

  const div = document.querySelector("#mealdata");

  div.innerHTML = data.meals.map(
    (d) => `<div>
  <img src=${d.strMealThumb} style = "width: 250px"/>
  <p>${d.strMeal}</p>
  </div>`
  );
};

fetchData();
