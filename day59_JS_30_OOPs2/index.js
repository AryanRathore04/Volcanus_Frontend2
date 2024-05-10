const product = [
  {
    title: "Mobile",
    price: 10000,
    catagory: "Electronics",
    imgSRC: "https://m.media-amazon.com/images/I/81fxjeu8fdL._AC_UY218_.jpg",
  },
  {
    title: "Laptop",
    price: 50000,
    catagory: "Electronics",
    imgSRC: "https://m.media-amazon.com/images/I/31uLEZHhMDL._AC_UY218_.jpg",
  },
  {
    title: "Shirt",
    price: 500,
    catagory: "Clothing",
    imgSRC: "https://m.media-amazon.com/images/I/51j2mBT8iiL._AC_UL320_.jpg",
  },
  {
    title: "Shoe",
    price: 1000,
    catagory: "Clothing",
    imgSRC: "https://m.media-amazon.com/images/I/61utX8kBDlL._AC_UL320_.jpg",
  },
  {
    title: "Book",
    price: 100,
    catagory: "Stationary",
    imgSRC: "https://m.media-amazon.com/images/I/71Q0U-8lxJS._AC_UY218_.jpg",
  },
  {
    title: "Pen",
    price: 10,
    catagory: "Stationary",
    imgSRC: "https://m.media-amazon.com/images/I/41oHQnkOavL._AC_UL320_.jpg",
  },
];

// // map and filter alwys return new array

// const result = product.filter((data) => data.catagory == 'Electronics')
// console.log(result)

const div = document.querySelector("#product");

div.innerHTML = product.map(
  (data) => `<div class = "superman" style = "text-align:center">
<img class="image" src="${data.imgSRC}" alt="${data.title}" />
<h3 class = "title">${data.title}</h3>
<button class = "butt">${data.price}</button> </div>`
);

document.querySelector("#mobiles").addEventListener("click", () => {
  const filterdData = product.filter((data) => data.catagory == "Electronics");
  div.innerHTML = filterdData.map(
    (data) => `<div class = "superman" style = "text-align:center">
<img class="image" src="${data.imgSRC}" alt="${data.title}" />
<h3 class = "title">${data.title}</h3>
<button class = "butt">${data.price}</button> </div>`
  );
});

let inputTag = document.querySelector("#type")
const inputValue = () => {

  let input = inputTag.value;


  const filterdData = product.filter((data) => data.title.toLowerCase().includes(input.toLowerCase()));
  div.innerHTML = filterdData.map(
    (data) => `<div class = "superman" style = "text-align:center">
<img class="image" src="${data.imgSRC}" alt="${data.title}" />
<h3 class = "title">${data.title}</h3>
<button class = "butt">${data.price}</button> </div>`
  );
  console.log( "input value = ",input);


  inputTag.value = "Your Search Result is";
};


