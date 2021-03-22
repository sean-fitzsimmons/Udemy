// const tweetForm = document.querySelector('#tweetForm'); 
// const tweetsContainer = document.querySelector('#tweets'); 
// tweetForm.addEventListener('submit', function (e) {
//     e.preventDefault();
//     const usernameInput = tweetForm.elements.username; 
//     const tweetInput = tweetForm.elements.tweet; 
// //     addTweet(usernameInput.value, tweetInput.value)
// //    usernameInput.value = ''; 
// //    tweetInput.value = ''; 

// // }); 
// // const addTweet = (username, tweet) => {
// //     const newTweet = document.createElement('li');
// //     const bTag = document.createElement('b'); 
// //     bTag.append(username);
// //     newTweet.append(bTag); 
// //     newTweet.append(`- ${tweet}`);
// //     tweetsContainer.append(newTweet); 
// // }

// // Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
// const form = document.querySelector('form');
// const infoContainer = document.querySelector('#list')

// form.addEventListener('submit', function (e) {
//     e.preventDefault(); 
//    const productInfo = form.elements.product;  
//    const qtyInfo = form.elements.qty; 
//    addInfo(productInfo.value, qtyInfo.value); 
//    productInfo.value = '';
//    qtyInfo.value = ''; 
// //   const product= document.querySelector('product');
// //   const qty= document.querySelector('qty'); 
   
  
// })

// const addInfo = (product, qty) => {
//      const newLi = document.createElement('li');
//      newLi.append(`${product}: `)
//      newLi.append(qty)
//      infoContainer.append(newLi)
// }


const form = document.querySelector('form');
const infoContainer = document.querySelector('#list'); 
form.addEventListener('submit', function (e) {
    e.preventDefault(); 
    const productInfo = form.elements.product; 
    const qtyInfo = form.elements.qty; 
    addInfo(productInfo.value, qtyInfo.value); 
    productInfo.value =''; 
    qtyInfo.value =''; 
    
    
})
const addInfo = (product, qty) => {
const newInfo = document.createElement('li'); 
newInfo.innerText = (`${product}: qty`)
infoContainer.appendChild(newInfo); 
}