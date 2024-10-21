const fs = require('fs');

const files = JSON.parse(fs.readFileSync("./jsonfile/user.json"))

let userFile = files.map((el) => {
    el.running = 1
    el.detail = "-"
    el.createdAt = Math.floor(new Date().getTime() / 1000)
    el.updatedAt = Math.floor(new Date().getTime() / 1000)
    return el
})


console.log(userFile)