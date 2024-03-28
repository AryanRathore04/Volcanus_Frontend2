// console.log("Shree Ganesh")

// toUpperCase()
// toLowerCase
// charAt()
// trim()
// charCodeAt()
// length

//////// indexOf =>  to find a particular character index

// const str = "Superman"
// const char = 'a'
// const index = str.indexOf(char)
// console.log(`The index of ${char} = ${index}`)

//////// replace => to replace a particular character in a string [ Frist occurence of a character if the character repeated multiple ]

// const str = "SUPERMAN"

// const brancdNewString = str.replace('U','u')

// console.log("Resulter String = ", brancdNewString  )

///////// slice => to extract a piece of string from a stringc

// const char = "Superman";
// console.log(char.slice(2, 4));


//////// split => to convert a string into a array

// const str = "my name is superman"
// console.log(str.split(" ")[0].charAt(0).toUpperCase())
// console.log(str.split(" ")[2].charAt(0).toUpperCase())
// console.log(str.split(" ")[6].charAt(0).toUpperCase())
// console.log(str.split(" ")[8].charAt(0).toUpperCase())

// console.log(str)

//////// substring => return a part of a string from starting and ending 
// const str = "$@Superman@#"

// console.log(str.substring(2,10))

// palindrome => 121 

const str = "1219"

let start = 0

let end = str.length -1

let flag = true

while(start < end){
    if(str.charAt(start) != str.charAt(end)){
        flag = false
        break
    }
    start++
    end--
}
if(flag){
    console.log("Plaindrome")
}else{
    console.log("Not a Palindrome")
}









