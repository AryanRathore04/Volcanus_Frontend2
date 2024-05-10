// let a = 1;
// console.log(a);

// let data = document.getElementById("superman");
// data.addEventListener("click", () => {
//   console.log("Click by eventListener");
// });

// data.addEventListener("click", () => {
//   console.log("Click by me");
// });
// data.addEventListener("click", () => {
//   console.log("Click by mewbiwhvkw");
// });
// data.addEventListener("click", () => {
//   console.log("Click by mecollll");
// });
// data.addEventListener("click", () => {
//   console.log("Click by meluperrrrr");
// });



let detail = document.getElementById("superman")
detail.addEventListener("click",(e)=>{
    console.log("event object", e)
    console.log("Click by eventListener")
})