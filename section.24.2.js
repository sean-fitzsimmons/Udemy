// const allImages = document.getElementsByTagName('img'); 

// for(let img of allImages) {
//     console.log(img.src); 
// }
// Pulled all of the sources for the collection of images 

// for(let img of allImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Male_Silkie.png/460px-Male_Silkie.png'
    
// }
// This is first instance of manipulating the HTML by making all the images have the same source

// const squareImages = document.getElementsByClassName('square')

// for(let img of squareImages ) {
//     img.src = "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Male_Silkie.png/460px-Male_Silkie.png "
// }
// This only changed the 3 img at that shared the class name 'square' 

// const links =document.querySelectorAll('p a');

// for (let link of links) {
//     console.log(link.href)
// }

// // This is the querySelectorAll, which is the most useful 

// const h1 = document.querySelector('h1');
// console.dir(h1);

const allLinks = document.querySelectorAll('a');
// for (let link of allLinks) {
//     link.innerText= 'i am a link'; 
// }
// changed all of the names of the links to 'i am a link' 

// document.querySelector('#egg').setAttribute("src", 'https://www.flaticon.com/svg/static/icons/svg/3523/3523063.svg');

// document.querySelector('#egg').alt = "chicken";
// example on how to use the setAttribute to change the source of an image. 
// const h1 = document.querySelector('h1')

// for (let link of allLinks) {
//     link.style.color = 'rgb(0, 108, 134)'; 
//     link.style.textDecorationColor ='magenta'; 
// }
// this changed the color off all the a tags on the webpage 
// Everything needs to be inside a stirng, inside of quotes to be valid js
// you have to use the for loop to be specific 
// ALSO not a great idea, this tech. is inline. 
// const container = document.getElementById("container");
// for(let i = 0; i < 100; i++){
//   /*First iliteration: button = a new DOM object, second iliteration:
//     button = a new DOM object, etc.*/
//    let button = document.createElement("button");
//         container.appendChild(button);
//         button.innerText = "Hey";
// }

