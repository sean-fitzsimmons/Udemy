const input = document.querySelector('input'); 
const h1 = document.querySelector('h1'); 

// input.addEventListener('change', function (e) {
//     console.log("THIDISISIS"); 
// })
// // the change input only fires when you click off the text or leave the text input. 

input.addEventListener('input', function(e) {
    h1.innerText = input.value; 
})
// This fires when ever the content in the input changes not when you click off 