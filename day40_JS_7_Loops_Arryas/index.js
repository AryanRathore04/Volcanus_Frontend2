// for -> Number of Iteration Know
// while -> Number of Iteration Unknow
// do-While -> Atleast Run Once
// For In -> key value {object}
// For of -> To Iterate the array
// For each -> element, index, array

// let number = 10
// let sum = 0
// while(number !== 0){
//     sum += number     //sum = sum + number
//     number--        //number = number - 1
// }

// console.log("Sum is = " , sum)

// let number = 496440;
// let result = 0

// while(number !== 0){
//     let reminder = number%10
//     console.log("Reminder at this point ", reminder)
//     result += reminder
//     console.log("Sum at this point =", result)
//     number = Math.floor(number/10)
// }
// console.log("final sum = ", result)





// For In

// const hero = {
//     name:'superman',
//     age: 50,
//     salary: 4579809,
//     gmail: "superman@gmail.com"
// }

// for(let key in hero){
//     console.log(key, hero[key])
// }



// For of


const arr = ["Apple", "Orange", 230, 40, 21.2344]

for(let val of arr){
    console.log(val)
}