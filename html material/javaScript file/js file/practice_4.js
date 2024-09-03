//Question No 1
let name = "Misbah\""
console.log(name.length)

//Question No 2
//explaine inculede , endwith and , startwith function ko use kro

let senstance = "Coding is a fun i use the chat GPT in my phone it is awsome app from AI"
let word = "GPT"
console.log(senstance.includes(word))
console.log(`This Word ${word} ${senstance.includes(word)? "is":"is not"} in the sentence`)

//Question 3

let str = " My Salary is 1000"
let salry = Number.parseInt(str.slice(14))
console.log(typeof salry)
console.log(salry)

