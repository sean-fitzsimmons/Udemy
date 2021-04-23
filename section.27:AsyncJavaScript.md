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
-   