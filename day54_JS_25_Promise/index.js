// promise has three stage
// 1. Pending
// 2. Resolve => Fullfil => .then()
// 3. Reject => .catch()

// const p = new Promise((resolve,reject)=>{
//     const age =10
//     if(age == 20){
//         resolve("Age is 20, my promise resolve")
//     }
//     else{
//         reject("Age is not 20, my promise is reject")
//     }
// })
// p.then((messge)=> console.log(messge)).catch((messge)=> console.log(messge))

const card = new Promise((resolve, reject) => {
  let tup = "adhar";
  let sup = "pan";
  let minBAlacnce = 1000;
  if (tup == "adhar" && sup == "pan" && minBAlacnce) {
    resolve({ minBAlacnce, mes: "You are eligable for voting" });
  } else {
    reject("You need to grow up atleast");
  }
});
card
  .then((message) => message.minBAlacnce)
  .then((data) => console.log(`Total amount ${data + 100}`))
  .catch((error) => console.log(error));
