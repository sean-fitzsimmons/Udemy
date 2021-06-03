# Creating Servers with Express 
    - a framework for web developers using node 
    - express 101 
## Intorduction 
- node application 
- library or framworks are code already written for us 
  - code that is typically downloaded uses nmp or scripts 
## first express app 
- no capital letters in app names 
- make a new dir
  - npm init -y 
    - makes a default json package 
    - install express 
      - npm i express 
  - make an express variable 
    - call express 
  - ctrl c will restart the server 
- 3000, 8080 common numbers used to address a server 
## The request and repsonse objects 
- req and res are js objects that express makes for us that parse information coming in and out into useable data
  - On the express docs there is a huge libary of inforamtion to use 
## Epress routing 
- this is how we can response specifically to the information being sent in 
- routing is taking the incoming code or reqest and matching that response 
  - routes would be like this.com/dogs 
  
## Express parameters 
- do not want to uses specific lines, it would be too difficult, just make a parameter to make things easier 
## Working with query strings 
- query string is the set of information that comes after the question make in a url 
## auto-restart with nodeman 
- in server
  - npm i -g nodemon 
  - nodemon index.js 
    - now nodemon is open in the file and working great!