const fs = require('fs');
const folderName = process.argv[2] || 'Project'

// console.log(fs)
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log("In the call back!")
//     if (err) throw err;
//   });
try {
fs.mkdirSync(folderName); 
fs.writeFileSync(`${folderName}/index.html`,"")
fs.writeFileSync(`${folderName}/app.js`,"")
fs.writeFileSync(`${folderName}/style.css`,"")
} catch (e) {
    console.log("something went wrong")
}
// Had to run a empty sting because the write file sync needed it to work according to the documentation
// these are making new directories using node 