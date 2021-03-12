// function collectEggs() {
//     let totalEggs = 6; 
//     console.log(totalEggs); 
// }

// let bird = 'scarlet Macw';
//  function birdWatch() {
//      let bird = 'Great Blue Heron'; 
      
//  }
// birdWatch(); 

// let radius = 8; 
// if (radius > 0) { 
//     const PI = 3.14159; 
//     let meg = "hiii!"; 
// }
// console.log(radius); 
// console.log(PI); 

// function bankRob() {
//     const heros = ['spider man'];
//     function cryForHelp() {
//         function inner(){
//         for (let hero of heros) {
//             console.log(`please help us, ${hero.toUpperCase()}`)
//         }
//     }
//     inner(); 
//     }
//     cryForHelp(); 

// }

// fucntion (x,y) {
//     return x + y; 
// }
// const add = function (x, y) {
//     return  x + y; 
// }

// function callTwice(func) {
//     func();
//     func();

// }
// function callTenTime(f) {
//     for (let i = 0; i < 10; i++){
//         f()
//     }
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1
//     console.log(roll)
// }
// callTwice(rollDie); 
// function makeMysteryFunc(){
//     const rand = Math.random();
//     if(rand > 0.5) {
//         return function() {
//             console.log("congrats i am a good function");
//             console.log("You win!"); 
//         }
//     } else {
//         return function () {
//             alert("YOU have been infected with herpes!!")
//         }
//     }
// }

// function makeBetweenfunc(min, max){
//     return function (num){
//         return num >= min && num <= max; 
//     }
// }
// // }
// // function isBetween(num) {
// //     return num >= 50 && num <=100; 
// // }
// function isBetween2(num) {
//     return num >=1 && num <= 10;
// }
// const myMath = {
//     PI: 3.14159,
//     square(num) {
//         return num * num;  
//     }, 
//     cube(num) {
//         return num ** 3; 
//     }
// }

// const square = {
//     area(num) {
//         return num * num; 
//     },
//     perimeter(num) {
//         return num * 4;
//     }
// // }
// const cat = {
//     name: 'Jackson',
//     color: 'white',
//     breed: 'siamese', 
//     meow(){
//         console.log(`${this.name} i shit my pants`)
//     }
// }
// // const meow2 = cat.meow;
// const hen = {
//     name: 'Helen',
//     eggCount: 0,
//    layAnEgg() {
//         this.eggCount += 1; 
//         return "EGG"; 
        
//     } 
// }
 
// try {
//     hello.toUpperCase();
// } catch {
//     console.log("error!")
// // }


//     function yell(msg){
//         try{ 
//     console.log(msg.toUpperCase().repeat(3));
//         } catch (e) {
//             console.log(e); 
//             console.log("please pass a string")
//         }
//     }
