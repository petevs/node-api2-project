// implement your server here
const express = require('express')
// require your posts router and connect it here
const postsRouter = require('./posts/posts-router')

const server = express()

server.use(express.json())
server.use(postsRouter)

server.get('/', (req, res) => {
    res.json({
        message: 'I am the homepage'
    })
})

module.exports = server