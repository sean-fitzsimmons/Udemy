// // // alert("does this work");
// const numbers = [1,2,3,4,5,6,] 

// numbers.filter(n =>{
//     return n === 4
// }) 

// // const doubles = numbers.map(function(num){
// //     return num *2; 
// // })
// // numbers.forEach(function (el) {
// //     if(el % 2 === 0) {
// //         console.log(el)
// //     }
    
// // })
// // (arrow functions)
// // const square = (x) => {
// //     return x * x; 
// // }
// //     const sum = (x, y) => {
// //         return x + y; 
// //     }
    
// // const add = function(x,y) {
// //     return x + y; 
// // }

// const add = (x,y) => {
//     return x + y; 
// }

// const square = (x) => {
//     return x * x;
// }
// const rollDie = () => ( 
//      Math.floor(Math.random() *6) + 1 

// )

// const add = (a,b) => a + b 


// const greet = (str) => {
//    return `Hey ${str}!`; 
// }

// setTimeout(() => {
//     console.log("Hellow")
//     }, 4000)

//     const id = setInterval(() => {
// console.log(Math.random())
//     }, 2000); 

//    clearInterval(id)

// const validUserNames= (arr) => {
//     return arr.filter(char => char.length < 10)
// }
// const validUserName = x => x.filter(n=> n.length > 10)
// const exams = [70, 77, 76, 89, 98, 69,
// ]
// console.log(exams.every(score => score >= 75))
// console.log(exams.some(score => score >= 75))
// console.log(exams.filter(score => score >= 75))

// const allEvens = arr => arr.every(num => num % 2 === 0); 

const prices = [9.99, 1.50, 19.99, 49.99, 30.50];
// let total = 0;
// for (let price of prices) {
//     total += price 
//     console.log(total)

// // const total = prices.reduce((total, price) =>  total + price)
// const minPrice = prices.reduce((min, price) => {
//     if(price < min) {
//         return price; 
//      }
// return min; 
// })
// const person = { 
//     firstName: 'Viggo',
//     lastName: 'John',
//     fullName: function () {
//    return `${this.firstName} ${this.lastName}`
//     },
//     shoutName: function() {
//         setTimeout(() => {
//             console.log(this);
//             console.log(this.fullName())
//         }, 2000)
//     }
// }
