// function singSong() {
//     console.log("DO");
//     console.log("RE");
//     console.log("ME");
// }
// singSong()
//  function greet(firstName) {
//      console.log(`First name is: ${firstName}`)
// //  }
//  function greet(firstName, lastName) {
//      console.log(`Hey there, ${firstName} ${lastName[0]}!`)
//  }
// greet('george','clooney'); 
// greet('Sean', 'Fitzsimmons'); 

// function repeat(str, numTimes) {
//     let result = ''; 
//     for (let i = 0; i < numTimes; i++) {
//        result += str;
//     }
//     console.log(result)
// }
// function isSnakeEyes(die1, die2){
//     if(die1 === die2 && die2 === die1) {
//         console.log("Snake Eyes!")
//     } else {
//         console.log("Not Snake Eyes!")
//     }
// }
// function add (x,y){
//     if(typeof x !== 'number' || typeof y !== 'number') {
//         return false; 
//     }
//     let sum = (x + y); 
//     return sum; 
// }
// function isShortsWeather(temperature) {
//     if(temperature < 75) {
//         return false; 
//     }
//             return true; 
//         }
// function lastElement(arr) {
//     if(arr.length === 0) {
//         return null; 
//     }
//     const last  = arr[arr.length -1]; 
//     return last; 
// }
// function capitalize(name) {
//     return(name.charAt(0).toUpperCase()+name.slice(1));
// }
    
// function sumArray(arr){
//     let sum = 0; 
//     for (let i = 0; i < arr.length; i++){
//         sum += arr[i]; 
//     }
//     return sum; 
// }
// function returnDay(num){
//     let days = [
//         "null",
//         "Monday",
//         "Tuesday",
//         "Wednesday",
//         "Thursday",
//         "Friday",
//         "Saturday",
//         "Sunday", 
//     ];
//     if(num >=1&& num <=7 )
//     {
// return days[num];
//         } else {
//             return null; 
//         }
//     }