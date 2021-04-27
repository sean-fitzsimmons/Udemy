## The call stack 
 - how js handles function calls 
 - The mechanism js interpreter uses to keep track of its place in a script 
   -  how js knows where it is 
 - Last in, first out data structure 
### How it works 
  - When the script calls a fucntion the interpreter adds it to the call stack then strarts carrying out the function 
  - Any functions that are called by that function are added to the call stack futher up, and run where thier calls are reached 
  - When the current function is funished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing 
  - loupe.com will show the call stack on functions, help visual them
    - This is pretty nice 
  - break points in the google dev tools will stop the function from running particular section, click the left of margin where the numbers are 
    - Good tool to help with errors in code 
## WebAPIs & Single Threaded 
- One thing in js that can be working on a project at any time, it can only run one line of code at a time. 
- Using the setTimeout() method, we can see that javascript will run all the code in order but delay the middle one 
  - that uses a function as an argument
  - The browser is doing the work, not the javaScript
  - The broswer is writen in c++ and can do things that js cant do, so js will hand things off to the brower to do. 
- Browsers can do special webAPI functions like setTimeout 
## Callback Hell 
- Having to next and create very deep code becuase you do not now if one action is going to be able to run so you want to give it options
  - This insures your code will work in a varitiy of situations 
## Enter promises
- These make working with call backs a bit easier 
- promise is an object represnign the eventual completion or failure of an asynchronous operation 
- Look into the Promisesinto for a comaparison of a call back and a promise 
- call back aprouch is how things were done for a long time 
  - .then(() => {
        console.log("itt worrked!)
        })
    .catch(() => {
        console.log("oh no")
    })
    - .then will run if it is resolved and .catch will run if it is not 
      - Using the .then 
                - return fakeRequestPomise('next.com/page')
                  - we can just run the next promise with .then 
                    - Only have to have one .catch() at the end of the promise 
                      - This is callled promise chaining 
## Creating our own promises 
-   const fakeRequest = (url) => {
   return new Promise((resolve, reject) => {
       const rand = Math.random(); 
        setTimeout(() => {
            if (rand < 0.7) {
            resolve('Your fake data here!'); 
            }
            reject('Request Error!')
        },1000)
    })
}

fakeRequest('/dogs/1')
    .then((data) => {
        console.log("Done with request!")
        console.log('data is:', data) 
    })
    .catch((err) => {
        console.log("oh on!", err)
    })
    - Using a promise to basically do a setTimeout and lag a bit before preforming the action you want it to do. 
    - First creat a function with two perameters, the first will resolve it and the next will reject it. 
  const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color; 
            resolve(); 
        }, delay)
    } )
}

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('organge', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('purple', 1000))
    .then(() => delayedColorChange('teal', 1000))
    .then(() => delayedColorChange('white', 1000))

  - rewrote the call back from hell nested nest to make the background color change using promises.
  - Much better 
  - if need to have a fail, just add on a single .catch and it will pick up all the necessary fails. '
  ## The Async Keyword 
  - syntax improvement for promises
  - by placeing async infront of the word function, it automactically returns a function 
  - If we throw and error or someting goes wrong along the way then the promise will not be resolved. 
  - Nice to use, this would be a type of code to use when using a username and password against a server 
## The await keyword 
- we can only use the await keyword inside of functions declared with async. 
- will pause the execution of the function, wating for a promise to be resolved 
## Handling Errors in Async functions 
- What happens when a promise is rejected that we are awaiting 
- can use the try {
} catch () { } method to check if code is working and where the error is being thrown 