const add = (x, y) => x + y; 

const PI = 3.14159; 

const square = x => x + x; 

// module.exports.add = add; 
// module.exports.PI = PI; 
// module.exports.square = square; 

// first way 
// const math = {
//     add: add,  
//     PI: PI,
//     square: square
// }

// module.exports = math; 

// clearner way 

exports.add = add; 

// THis is a shortcut way but doe not work in the cleaner version 