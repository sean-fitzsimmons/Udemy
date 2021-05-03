// const req = new XMLHttpRequest(); 

// req.onload = function () { 
//     console.log("all done with request");
//    const data = JSON.parse(this.responseText);
//    console.log(data.ticker.price)
    
// }
// req.onerror = function () {
//     console.log("error!")
//     console.log(this); 
// }

// req.open('GET', 'https://api.cryptonator.com/api/full/btc-usd')
// req.send(); 

// XMLHttpRequest, its a whole lot of code for a little output. 

// fetch("https://api.cryptonator.com/api/full/btc-usd")
// .then(res => {
//     console.log("RESPONSE", res)
//     return res.json()
// })
// .then(data => {
//     console.log("data parsed...", data)
//     console.log(data.ticker.price)
// })
// .catch(e => {
//     console.log("Oh no! Error!", e)
// })

// This is the newer and easier way to get api data 
// Promise version 

// const fetchBitcoinPrice = async () => {
//     try {
//    const res = await fetch('https://api.cryptonator.com/api/full/btc-usd'); 
//    const data = await res.json();
//    console.log(data.ticker.price); 
// } catch (e) {
//     console.log("something went wrong!", e)

// }
// }
//  The much cleaner async method of getting api's 
// the try and catch will grab anything that goes wrong 

// axios.get("https://api.cryptonator.com/api/full/btc-usd")
// .then(res => {
//     console.log(res.data.ticker.price) 
// })
// .catch(err => {
//     console.log("error!", err)
// })

// This is the absolute best way to get info via api request, super simple and clean 

// const fetchBitcoinPrice = async () => {
// try {
//  const res = await axios.get("https://api.cryptonator.com/api/full/btc-usd")
// console.log(res.data.ticker.price)
// } catch(e) {
// }
// }

// // This is the try catch method 
// const jokes = document.querySelector('#jokes'); 
// const button = document.querySelector('button'); 


// const addNewJoke = async () => {
//    const jokeText = await getDadJoke()
//     const newLi = document.createElement('LI'); 
//     newLi.append(jokeText)
//     jokes.append(newLi)

// }
// const getDadJoke = async () => {
//     try {
//     const config = { headers: { Accept: 'application/json'}}
//     const res = await axios.get('https://icanhazdadjoke.com/?', config)
//     return res.data.joke; 
//     } catch(e) {
//         return "No jokes availible"
//     } 
// }
// button.addEventListener('click', addNewJoke)

const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault(); 
    const searchTerm = form.elements.query.value; 
    const config = { params: { q: searchTerm}, headers: {} }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    document.getElementById("newSearch").innerHTML = ""; 
    makeImages(res.data)
    form.elements.query.value = ''; 
})

const makeImages = (shows) => {
    for(let result of shows) {
        if(result.show.image) {
        const img = document.createElement('IMG'); 
    img.src = result.show.image.medium;  
    document.getElementById("newSearch").append(img); 
    // document.body.append(img)
    }
}
}
// This allowed us to search the tvmaze site and pull pitures up using the api 