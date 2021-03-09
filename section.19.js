
// console.log(1) 
// console.log(2) 
// console.log(3) 
// console.log(4) 
// console.log(5) 

// for(let i = 1; i<=10; i++){
//     console.log(i);
// }
// for(let i=1; i<=6; i++) {
//     console.log("Da da da");
// }
// for (let i = 0; i <=20; i +=2) {
//     console.log(i);

// }
// for (let i = 100; i >= 0; i -= 10){
//     console.log(i);
// }
// const animal = [
//     "Aardvark",
//     "Albatross",
//     "Alligator",
//     "Alpaca",
//     "Ant",
//     "Anteater",
//     "Antelope",
//     "Ape",
//     "Armadillo",
//     "Donkey",
//     "Baboon",
//     "Badger",
//     "Barracuda",
//     "Bat",
//     "Bear",
//     "Beaver",
//     "Bee",
//     "Bison",
//     "Boar",
//     "Buffalo",
//     "Butterfly",
//     "Camel",
//     "Capybara",
//     "Caribou",
//     "Cassowary",
//     "Cat",
//     "Caterpillar",
//     "Cattle",
//     "Chamois",
//     "Cheetah",
//     "Chicken",
//     "Chimpanzee",
//     "Chinchilla",
//     "Chough",
//     "Clam",
//     "Cobra",
//     "Cockroach",
//     "Cod",
//     "Cormorant",
//     "Coyote",
//     "Crab",
//     "Crane",
//     "Crocodile",
//     "Crow",
//     "Curlew",
//     "Deer",
//     "Dinosaur",
//     "Dog",
//     "Dogfish",
//     "Dolphin",
//     "Dotterel",
//     "Dove",
//     "Dragonfly",
//     "Duck",
//     "Dugong",
//     "Dunlin",
//     "Eagle",
//     "Echidna",
//     "Eel",
//     "Eland",
//     "Elephant",
//     "Elk",
//     "Emu",
//     "Falcon",
//     "Ferret",
//     "Finch",
//     "Fish",
//     "Flamingo",
//     "Fly",
//     "Fox",
//     "Frog",
//     "Gaur",
//     "Gazelle",
//     "Gerbil",
//     "Giraffe",
//     "Gnat",
// ]
// for (let i= 0; i < animal.length; i++) {
//     console.log(i, animal[i].toUpperCase()); 
// } 
// // (iteratinging over an array)
// for (let i = 1; i <= 10; i++){
//     console.log(`i is: ${i}`)
//     for( let j = 1; j < 4; j++){
//         console.log(`   j is: ${j}`)
//     }
// }
// // (Nested loops)
// let count = 0;
//  while(count < 10){
//      count++; 
//     console.log(count)
// }

// const SECRET = "BabyHippo"; 
// let guess = prompt("Enter the secret code..");
// while(guess !== SECRET) {
//     guess = prompt("Enter the secrect code");
// }
// console.log("Congrats!")
// (While loop)

// let input =prompt("Hey, say something!")
// while(true){
//     input = prompt(input); 
//     if(input.toLowerCase() === "stop copying me") {
//         break; 
//     }

// }
// console.log("OKAY")
// (break is a way of stopping a loop)
// let maximum = parseInt(prompt("Enter the maximum number")); 
// while (!maximum) {
//     maximum = parseInt(prompt("Enter a valid number")); 
// }
// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum); 

// let guess = parseInt(prompt("Enter your first guess!")); 
// let attempts = 1; 

// while (parseInt(guess) !== targetNum) {
//     if(guess === 'q') break; 
//     attempts++; 
//     if(guess > targetNum) {
//         guess = prompt("Too high! Enter a new guess:");
//     }else{ 
//         guess = prompt("Too low! Enter a new guess:"); 
//     }
//     }
//     if(guess === 'q'){
//         console.log("Ok, quitting")
//     } else {
//         console.log("congrates")
//         console.log(`You got it! It took you ${attempts} guesses`)

//     }
// (THis was Guessing game)
// const subreddits = ['cringe', 'books', 'chickens', 'funny']
// for(let i = 0; i < subreddits.length; i++) {
//     console.log(`Visit reddit.com/r/${subreddits[i]}`)
// }
// for(let sub of subreddits){
//     console.log(`Visit reddit.com/r/${sub}`)
// }
// (For of loop, makes life easier)
// for(let char of "Hello world") {
//     console.log(char); 
// }
// (Can use this with iterals like strings)
// const numbers = [1,2,3,4,5,6,7,8,9];
// for(let num of numbers) {
//     console.log(num*num)
// }
const testScores = {
    keenan: 80, 
    damon: 67, 
    kim: 89, 
    shown: 91, 
    marlow: 72, 
    dwayne: 77, 
    nadia: 83,
    elvira: 97, 
    diedra: 81, 
    vonnie: 60

}

// for(let person in testScores) {
//     console.log(`${person} scored ${testScores[person]}`)
// }
let total = 0; 
let scores= Object.values(testScores); 
for (let score of scores) {
    total += score; 
}
console.log(total / scores.length)