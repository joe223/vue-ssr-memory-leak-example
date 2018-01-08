import Vue from 'vue'
import express from 'express'
import SSR from 'vue-server-renderer'
import CreateApp from './app'
const server = express()
const renderer = SSR.createRenderer()
let initVal = 0
let times = 0

server.get('*', (req, res) => {
    const app = CreateApp()
    
    renderer.renderToString(app, (err, html) => {
        if (err) throw err
        res.end(html)
    })
    const currentVal = getM()    
    const diff = currentVal - initVal
    process.stdout.clearLine()
    process.stdout.cursorTo(0)
    process.stdout.write("memory (MB): " + currentVal);
    // if (diff >= 0) {
    //     ++times;
    //     initVal = currentVal
    //     console.log(`\r\n${times}:, ${initVal}`)
    // }
})

server.listen(3000, () => { console.log('start server')})

function getM () {
    return process.memoryUsage().heapUsed / 1024 / 1024
}