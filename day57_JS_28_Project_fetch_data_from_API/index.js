//indian
const fetchData = async (catagory) => {
  const api = await fetch(
    `https://themealdb.com/api/json/v1/1/filter.php?a=${catagory}`
  );

  const data = await api.json();
  console.log(data.meals);

  const div = document.querySelector("#mealdata");

  div.innerHTML = data.meals.map(
    (d) => `<div>
  <img src=${d.strMealThumb} class="mean" style = "width: 250px"/>
   <p class="heading">${d.strMeal}</p>
  </div>`
  );
};

// fetchData("indian");

document.querySelector("#mealdata2").addEventListener("click", () =>  fetchData("indian"));
document
  .querySelector("#italiandata")
  .addEventListener("click", () => fetchData("italian"));
document
  .querySelector("#chinesedata")
  .addEventListener("click", () => fetchData("chinese"));
document
  .querySelector("#mexicandata")
  .addEventListener("click", () => fetchData("mexican"));










