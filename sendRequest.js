const axios = require('axios')
const speed = 10
const max = 10000

let init = 0

const id = setInterval(() => {
    for (let i = 0; i < speed; i ++) {
        console.log(init)
        axios.get('http://localhost:3000')
    }
    init += speed
}, 1000)