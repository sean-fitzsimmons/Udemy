const express = require("express");
const app = express();

// app.use((req, res) => {
// console.log("we got a new request!")
// res.send("hello we got your request this is your respose")
// })

app.get('/', (req, res) => {
    console.log("Homepage!!!")
    res.send("Homepage is up!!")
})

app.get('/r/:subreddit', (req, res) => {
   const {subreddit } =  req.params; 
    res.send(`<h1>Browsing the ${subreddit} dank subreddit</h1>`)
})
app.get('/r/:subreddit/:postId', (req, res) => {
   const {subreddit, postId } =  req.params; 
    res.send(`<h1>Viewing ${postId} on the ${subreddit} subreddit</h1>`)
})
// the : after subredit or postId indicates is a variable not exact word 
app.post('/cats', (req, res) => {
    res.send('post request')
})
app.get('/cats', (req, res) => {
    console.log("Cat request")
    res.send('Meow!')
})

app.get('/dogs', (req, res) => {
    console.log("dog request!!")
    res.send('Woof!!')
})

app.get('/search', (req, res) => {
    const { q } = req.query; 
    if (!q) {
        res.send("nothing found if nothing searched")
    }
    res.send(`<h1>search results for ${q}</h1>`)
})

// This is how to setup a string query 

app.get('*', (req, res) => {
    res.send('I dont now the round to that')
})





//The * will get everything this not specifically selected by on the epxress server page 

app.listen(3000, () => {
    console.log("listening on port")
})