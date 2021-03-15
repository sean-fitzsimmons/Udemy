// // Default params 
// // Old way
// function rollDie(numSides) {
//     if (numSide === undefined) {
//         numSides = 6
//     }
//     return Math.floor(Math.random() * numSides) + 1 
// }
// // New way
// function rollDie(numSides = 6) {
//     return Math.floor(Math.random() * numSides) + 1 
// }  
// // You can write multiple default params but need to watch out for the order
// function greet(msg,person) {
//     console.log( `${msg}, ${person}!`)
// } 
// // add a default value to msg 
// // Always have default paras come second 
// function greet(person, msg = "Hey there") {
//     console.log( `${msg}, ${person}!`)
// } 
// // add as multiple defaults as long as they are after regular expressions 
// function greet(person, msg = "Hey there", punc = "!",) {
//     console.log( `${msg}, ${person}${punc}`)
// } 

// //Spread in function calls 
// const nums = [ 1,2,3,4,5,6,67]
// Math.max(...nums); 
// // Its going to break up the array into individual arrays so the math.max can do its thing.
// // Without the spread operator you get a NaN while trying to find the max 
// // can also spread strings 

// // Spread with Array literals 
// const cats = ['green', 'scout', 'Rocket']; 
// const dogs = ['John', 'doug', 'steven']; 
// // able to make a copy of an arrray 
// const allPets = [...cats];
// // you can combine them as well! Supper convienent 
// const allPets1 = [...cats, ...dogs]

// // Spread with OBJECTS literals 
// // combine objects, make a new one , copy 

// const feline = { legs: 4, family: 'Felidae'}; 
// const canine = { isFurry: true, family: 'Caninae'}

// // make a new one, going to take the key value pairs and adds to the new one 
// const catDog = {...feline, ...canine}; 

// // Data from a form add information 
// const dataFromForm = {
//     email: 'blueman@gmail.com',
//     password: 'Fuckood', 
//     useranme: 'yoooo', 
// }
// // Added new information 
// const newGuy = {...dataFromForm, id: 2322, isAdmin: false}; 

// //REST 
// looks like spread but is completely different 

// function sum() {
//     return arguments.reduce((total, el) => total + el)
// }
// sum(2,2,3,54,56,6,76,7,88,8); 

// // collects all remaining arguments and puts them in a array 
// function sum (...nums) {
//     return nums.reduce((total, el) => total + el)
// }
 
function raceResults(gold, silver, ...everyoneElse){
    console.log(`GOLD ${gold}`)
    console.log(`Silver ${silver}`)
    console.log(`Goodluck everybody else: ${everyoneElse} `)
}
// Rest is not pulling anything out it is collecting it into a single paramter
// like the ...rest of them

//  Destructuring Arrays 
const scores = [2223333, 3345433, 343443434, 3434343, 3434343]; 
// slow way 
const highScore = scores[0]; 
const secondHighScore = scores[1]; 
// fast way have to have [] to indcate we are destructoring from an array 
const [gold, silver, bronze, ...everyOneElse] = scores; 

// Destructuring Objects 
// more common the from array 
const user = {
        email: 'blueman@gmail.com',
        password: 'Fuckood', 
        useranme: 'yoooo', 
        firstName: 'Jeen',
        lastName: 'song',
        born: 1933, 
        bio: 'harvey milk',
}
// Slow way 
// const firstName= user.firstName; 
// const lastName= user.lastName; 
// // fast way
// const {email, firstName, lastName, born, bio} = user;

// // This is how you can quickly rename these variables
// const {email: emailYeah} = user; 

//If you try to rename and set a default it will not work 
// const {firstName, lastName, born: Born = 'N/A'} = user; 

//You can add a new veriable and give it a default if not defined
// in the original object 
// const {firstName, lastName, Crashed = 'Yesterday'} = user; 

// Destructoring params 
// // Simple function
// function fullName(user) {
//     return `${user.firstName} ${user.lastName}`
// }
// // Destruct that at bit
// function fullName(user) {
//     const {firstName, lastName} = user; 
//     return `${firstName} ${lastName}`
// }
// deconstruct the function coming in to simplify
// You can add default value as well  
function fullName({ firstName, lastName}) {
    return `${firstName} ${lastName}`
}