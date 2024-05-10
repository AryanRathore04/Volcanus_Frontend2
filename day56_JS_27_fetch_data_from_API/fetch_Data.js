const fetchData = async () => {
  const api = await fetch("https://jsonplaceholder.typicode.com/todos");

  const data = await api.json();
  console.log(data);
  // return data;

  const div = document.getElementById("#showdata");

  

  div.innerHTML = data.map((d) => `<h1>${d.title}</h1>`);

};

fetchData();
