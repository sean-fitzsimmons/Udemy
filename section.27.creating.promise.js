// const sayYesorno = () => {
//     return new Promise((yes, no) => {
//         const delay = Math.floor(Math.random() * 4500) + 500; 
//             setTimeout(() => {
//                 if (delay > 4000) {
//                     yes("Say yes")
//                 } else {
//                     no("fuck off")
//                 }
//             }, delay)
// })
// }

// sayYesorno()
//     .then((data) => {
//         console.log(data)
// //     })
// //     .catch((err) => {
// //     console.log(err)
// //     }) 

// // This needs two perameters, can be named whatever 

// const fakeRequest = (url) => {
//    return new Promise((resolve, reject) => {
//        const rand = Math.random(); 
//         setTimeout(() => {
//             if (rand < 0.7) {
//             resolve('Your fake data here!'); 
//             }
//             reject('Request Error!')
//         },1000)
//     })
// }

// fakeRequest('/dogs/1')
//     .then((data) => {
//         console.log("Done with request!")
//         console.log('data is:', data) 
//     })
//     .catch((err) => {
//         console.log("oh on!", err)
//     })
//  Rewrite function from call back hell 

// const delayedColorChange = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color; 
//             resolve(); 
//         }, delay)
//     } )
// }

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('organge', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('purple', 1000))
//     .then(() => delayedColorChange('teal', 1000))
//     .then(() => delayedColorChange('white', 1000))

// async function hello () {

// }

// const sing = async () => {
//     throw "Oh no, problem!"
//     return "la la la la"
// }

// sing()
// .then(data => {
// console.log("Promise resolved with:", data) 
// })
// .catch(err => {
//     console.log("Oh no, promise rejected!")
//     console.log(err)
// })

const login = async (username, password) => {
    if(!username || !password) throw 'Missing Credentials'
    if(password === 'corgif') return 'welcome!'
    throw 'Invalid password '
}
login('assdfjl;', 'corgif')
    .then(msg => {
        console.log("logged in!")
        console.log(msg)
    })
    .catch(err => {
        console.log("ERR!")
        console.log(err)
    })
