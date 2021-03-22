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

## The key word this and events 
This helps us to make our events more versitile. 
In the example below, instead of having to call button.style.background.color...
we can make an new function called this.style.background.color and call the function inside our event listener. 

buttons = document.querySelectorAll('button');

for (let button of buttons){
    button.addEventListener('click', colorize)
}

const h1s = document.querySelectorAll('h1'); 
for (let h1 of h1s) {
    h1.addEventListener('click', colorize)
}

function colorize() {
    this.style.backgroundColor = randomColor();
    this.style.color = randomColor();
}

## Event object and keyboard events 
Event object is something we have access to in every event handler automatically 
you just add an argument to the function and then use that argument to log certain things 
const input = document.querySelector('input'); 
input.addEventListener('keydown', function(e) {
    console.log(e.key)
    console.log(e.code)
})
In this example. the input is console logging all of the keys i type in in plus
 the key codes that go with it. 
 we used e as the event object to use the .key and .code propertys 

## Form Events & preventDefault

We are giving the information a place to go!
e.preventDefault(); is going to prevent the submit form from going to another page...
    or the default 
    This will also allow me to use console.log or whatever action i have in the function 

## Input and change Events 
In the event listener 
'change' this fires the content of the input when youve clicked off
'input' this fires the context of the input as you type it 

## Event bubbling 
 When you put a bunch of events inisde the the html, they will trigger outward, 
 so if you have button with event alert on cick inside a p tag that also has a event, 
 they will both trigger,starting inside. 
 e.stopPropagation(); will stop the event from bubbling up and triggering other events

## Event delegation 
strategy for writing code
the e or function(e), the event object is a directory for us to use in order to grab things from the elements we are using the event listener for. 
Example: 

tweetsContainer.addEventListener('click', function (e) {
    e.target.remove();
})


This is an example from the lecture
basicallly we are removing an li using the ul to access it. TweetsContainer is a ul 
and we are using the e.target... which when you console.log(e) is a li... to remove the li from the ul. Pretty use full stuff. We have to do it this way because if you tried to remove the li directly it will only remove what is already on the html doc, not what we are adding to it using js. 

or 

tweetsContainer.addEventListener('click', function (e) {
   e.target.nodeName === e.target.remove();
})

This is basically checking that what we are trying remove is a 'li'