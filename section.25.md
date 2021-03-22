# Dom events    
Learn how to run js when a user uses a button, drags a thing, hovers 

## intro to events 
Key to createing interactive websites 
Running code when user does certain things 
Click, drags, drops, hovers, scrolls, form submission.... etc. 

## Inline events 
 onclick = ; inside the HTML element, its very chucky and not recommened 
   <button onclick="alert('you clicked')">Click me</button>

## The online property 
this uses javascript to set the onclick property on the button seclected 
    using the id v2 on the button element 
    This is better then the first option 
const btn = document.querySelector('#v2'); 
btn.onclick = function() {
    console.log("you clicked me")
}
    .on... has a bunch of varitions to do a bunch of different stuff 

## addEventListener 
the best option of the 3 
basically a swiss army knife of eventlisteners, so we can pass in whatever event we want 

const btn3 = document.querySelector('#v3'); 
// btn3.addEventListener('mouseup', function () {
//     alert("clicked!")
// })

The big advantages is you can have as many call backs as you want 
Also has a whole bunch of different opitons 
More flexiblity 

They also have .removeEventListener which is nice 

const hello = document.querySelector('#hello');
const goodbye = document.querySelector('#goodbye');

hello.addEventListener('click', () => {
    console.log('hello')
})

goodbye.addEventListener('click', () => {
    console.log('goodbye')
}) 

Another example. 





