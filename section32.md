# Exploring Modules & the NPM Unvierse 
- Next step before going on to express 
## Working with module.exports 
- sharing js code between files 
- module.export.objectname = objectName 
  - This will export te code to the other file when called with require 
  - if referencing one file, need to reference the path to find it 
    - ./directoryNmae 
  - and reference the modules 
## Requriing a directory 
- const cats = require('./shelter'); 
  - This will requrie and entire directory and pull all of the infor into strings on the new file 
## Introducing NPM 
- node package manager 
- massive library of code people have written that we have access to 
- kind of like homebrew 
## Installing packages 
- npm install 
- its going to create a folder called node_modules inside your directory, it contains the guts that make your package run 
- nmpjs.com will be the place to search through packages and find the ones you want to use and they will tell you exactly how to use them 
## Adding global packages 
- the way just installed the node packages they are use in the current directory opened in. 
  - Can not require it from ouside the folder somewhere else 
- use the -g flag to do that 
  - It going to install on the computer far above the current directory. 
    - You may need to give permission
- npm link cowsay is a way to link to the packages to use require for different files 
- this is done mostly for commandline based tools 
## The all important package.json  
- goes inside every node app we create 
- make a new directory 
  - npm init 
    - gives a bunch of defaults 
    - you have a package.json made 
      - Installed figlet package inide the the artster directory with the pre made json package we made 
        - no warning or bs 
        - The json package acts as a record of the everything used 
    - got to the node moduoles insdiet arters file and downlowd other packages
      - it will automatically update the json package i made 
      - and we can use that package in the index.js then call the node in the terminal to get a different text print out( this time it was a green hello world )
## Installinga all dependencies for a project 
- When uploading to git do not include node modules 
- if pull code from github and has package.json, 
  - just do npm install and it will atomatically install all the modules 
## languae guesser challange 
