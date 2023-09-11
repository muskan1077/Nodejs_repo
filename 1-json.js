const fs = require('fs')
// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)
// const fs = require('fs')
// const book = {
//     title: 'ego is the enemy',
//     author: 'ryan'
// }
// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJSON)
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)
user.name = 'muskan'
user.age = '54'
const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json',userJSON)