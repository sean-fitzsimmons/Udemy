const dayOfWeek = prompt('Enter a day').toLowerCase();
if (dayOfWeek === "monday") {
    console.log("Ugggghhh i hate mondays")
} else if (dayOfWeek === "saturday") {
    console.log("Satudayz are for the boyz"); 
} else if (dayOfWeek === "friday") {
    console.log("lets black out!")
} else { 
    console.log("Meh")
}

0-5 - Free 
5 - 10 - 10$
10 - 65 - 20$ 
65+ Senior 10$ 

const thisAge = Math.random() * 100; 
const age = Math.floor(thisAge); 
console.log(age);
if (age < 5) {
    console.log("You are a baby, you get in for free")
} else if (age < 10) {
    console.log("You are a child, you pay 10$")
} else if (age < 65) {
    console.log("you are an adult, its 20$")
} else {
    console.log("You are an old person, its 10$ again")
}

password 6+ characters

Trusy and falsy

userInput is typeed in its true when you leave an empty string its false. 
const userInput = Prompt("Enter something"); 
if (userInput) {
    console.log("Truthy")
} else {
    console.log("Falsy")
}

0, NaN, false, undefined, " ",  are all inhearntly falsy, so they will log the else, basically guilty until proven inocent
if (0) {
    console.log("Truthy")
} else {
    console.log("Falsy")
}

&& (and) operator 
const password = prompt("enter your passowrd")
if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("This works!")
} else {
    console.log("Sorrrrry but no.")
}

|| (or) operator 
0-5 - Free 
5 - 10 - 10$
10 - 65 - 20$ 
65+ Senior free
const age = -10; 
//Two operators runnning on the same line. 
if(age >= 0 && age < 5 || age >= 65) {
    console.log("Free");
} else if (age >= 5 && age < 10) {
    console.log("$10")
} else if (age < 65) {
    console.log("free")
}
 else {
    console.log("How are you here")
}

let firstName = prompt ("enter your first name"); 
if (!firstName) {
    firstName = prompt("TRY AGAIN!!"); 
}

You can completely negate an entire expression 
const age = 8; 
if (!(age >= 0 && age < 5 || age >+ 65)) {
    console.log("You are not a baby or a senior")
}
