// "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"

const container = document.querySelector('#container');
const baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 151; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon')
    const label = document.createElement('span'); 
    label.innerText = `#${i}`; 
    const newImg = document.createElement('img'); 
newImg.src = `${baseURL}${i}.png`

pokemon.appendChild(newImg)
pokemon.appendChild(label); 
container.appendChild(pokemon) 
}
// Explination: 
// select the container id and give it a value of container
// Then take the majority of the image url before the number we wont to loop and give it a value 

// create a for loop, starting at 1, max and equal to 151, increasing by 1
// next creat a new div element call it pokemon 
// create a classList and add the class pokemon to the generic div for css styling 
    //Not imortant for running the code just for css 
// create a new span element call it label 
// put some text inside label using string templet literals so that it can be used in the loop. ${} with at # in front to display in the text 
// create a new element img call it newImg 
// put a soure inside the newImg (img) element .src set it equal to string templet literals with our baseURL and i loop... finshed with the rest 
//     of the url 

// Now we append that mf so it can show up in the HTML! 
// so in the HTML we had to make a section with the id container 

// now in JS 

// we appendChild newImg under pokemon div
// appendChild label under pokemon div
// and now we throw the whole thing under container using that pokemon div that has our other elemnts 
// run that shit! 
// all of this is happening inside the for loop 
// End of Explinations 




// This is using a loop to create a bunch of images 
// Above is the correct for loop 
// Below is my first attempt.... I was on th right track and had the right idea! 
//  just neeed to execute it better. 


// const firstPart = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
// const endPart = ".png"

// function pokeE(arr) { 
// for (let i=0; i < 0; i++) {
//  first+ arr[i] + end; 

// }
// console.log("pokeE");
// }
