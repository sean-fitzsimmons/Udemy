// const btn = document.querySelector('#v2'); 
// btn.onclick = function() {
//     console.log("you clicked me")
// }

// function shit() {
//     console.log('yoooooooo')
// }
// btn.onmouseenter = shit; 

// const h1 = document.querySelector('h1');

// h1.onclick = () => {
// alert('what are you doing?')
// }
// // You are not limited to just buttons, you can do this for any element. 
// // All of these functions are the same type, just different variations. 

// const btn3 = document.querySelector('#v3'); 
// // btn3.addEventListener('mouseup', function () {
// //     alert("clicked!")
// // })
// // // You can get a bunch of different types of events from MDN 
// // btn3.addEventListener('mouseup', shit)

// // we can also pass in a function instead of using a annonymous one like so 
// const btn = document.querySelector('button');
// const h1 = document.querySelector('h1'); 
// btn.addEventListener('click', function (){
//     const newColor = randomColor();
//     document.body.style.backgroundColor = newColor;
//     h1.innerText = newColor;  
// })

// const randomColor = () => {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//    return `rgb(${r}, ${g}, ${b})`;
// }



//this was a ranbom color generator using RGB. 
// Math.floor returns a whole number no decials 
// Math.random() will return a number between 0-1. 

// btn.addEventListener('click', function () {
//     let h = Math.floor(Math.random() * 100); 
//     console.log(h); 
// })

// this is a little example of how Math.floor() and Math.random(). 
// They work together well, if you want to get a whole number you have to 
    // use Math.floor(). if you only use Math.random() * 100 your going to get example: 3.22233435534534343.
    // the Math.random() * 100 or any number is important to get your max number. 

//     const randomColor = () => {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//    return `rgb(${r}, ${g}, ${b})`;
// }

// const buttons = document.querySelectorAll('button');

// for (let button of buttons){
//     button.addEventListener('click', colorize)
// }

// const h1s = document.querySelectorAll('h1'); 
// for (let h1 of h1s) {
//     h1.addEventListener('click', colorize)
// }

// function colorize() {
//     this.style.backgroundColor = randomColor();
//     this.style.color = randomColor();
// }

// When using th querySelectorAll, make sure you do a for(of) loop i guess 
// // This is pretty cool. You can use it to make adding events to your elements way easier

// document.querySelector('button').addEventListener('click' , function(evt) {
//     console.log(evt); 
    
// })
// const input = document.querySelector('input'); 
// input.addEventListener('keydown', function(e) {
//     console.log(e.key)
//     console.log(e.code)
// })

// window.addEventListener('keydown' , function(e) {
//     switch(e.code) {
//         case 'ArrowUp':
//             console.log("UP");
//             break; 
            
//         case 'ArrowDown':
//             console.log("DOWN");
//             break; 
            
//         case 'ArrowLeft':
//             console.log("LEFT");
//             break; 
            
//         case 'ArrowUp':
//             console.log("RIGHT");
//             break; 
//         default: 
//             console.log("IGNORED")
            
//     } 
// })
// input.addEventListener('keyup', function() {
//     console.log("keyup")
// })

