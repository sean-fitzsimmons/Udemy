# AJAX and API's

## Intro into AJAX
- How to make request using javaScript 
- asynchronous javascript and xml 
- The server just gets barebones information 
  - It speaks in JSON.
- load data, retreive data and store data 
- with js we can send data back and forth in real time without having to refesh the page like in the past. 
## Intro to APIs
- application programming interface
- a portal into a different database or data set 
- you can set up a bunch of stuff, like displaying the weather or send a tweet 
  - Some you have to pay for but others are free
## What is JSON
- early days used xml but today nor many api's will respond to this 
- json stands for java sccipt object notation 
  - values json can read 
    - object, array, string, number, "true", "false", "null" 
  - json format tools online to turn your code into json which is dope 
  - json is used with python, rubi and other langueges besides js 
- JSON.parse(data) pass in the json string and it will turn it into js 
- JSON.stringify(dog); a string; will be turned into json so that other langues can preceive it 
- AJAX referse to xml which is uncommon 
- AJAJ referse to json which is most widey used 
  ## Post man 
  - make request to api's and play around with them 
  - take a website and bring up the html, css and js 
    - like the dev tools does but much more readable 
    - https://api.cryptonator.com/api/full/btc-usd
      - This what we are looking up in postman 
      - status code tells the client that things are okay have a good response, 200 ok is what it says 
      - 404 is something the server can not find 
      - 405 is not allowed 
      - anthing that starts with a 2 is good. 
      - 3 is redirect 
      - 4 is not great, we did something wrong 
      - 5 server error resposnes 
    - Header will tell the date last modified, content type and general information about the page 
      - content type - application/json     
        - means we are getting json back 
    - body 
      - the core of the info, could be html, could be json could be something else 
  ## query strings and headers 
  - on normal site you can normally find the api in the bottom of the page or in the developers section if it has it
  - ?q=:query, this is a variable and something you have to provide for the api  
    - a lot fo api's require the use of query strings 
      - query strings are information we can provide to any url 
    - some need a header 
        - go under the header tab 
        - key = Accept and value = application/json 
          - This is going to pull up the jason formate for the api 
  ## Making XHR's
  -XMLHttpRequest 
    - The original way of sending request via js 
    - absolutely terrible 
  ## The fetch api 
  - Newer way to write api request in javascprit 
  - Just much simpler way to get api requests 
  - have to use try and catch to get mistakes
  ## Intro to Axios 
  - This is a library built on top of fetch that gives a handful of methods to write simple requests 
  - External script to throw into the HTML with 
    - <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script> 
  - Axios makes it so we do not have to do a return promise, it merges the promises into one 
  - You can use axios in the style sheet and on a server, so people like that about it 
  - this is also useful for making a bunch of different types of requests as well 
## setting headers with axios 
- we can specifiy headers 
- can attach the data to a button and have real time api rocking in the dom 
- do not do an infitinte loop because api's can ban you 
  
## Tv show search app 
- 