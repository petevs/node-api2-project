const express = require('express')
const posts = require('./posts-model')
const router = express.Router()

// implement your posts router here

router.get('/api/posts', ( req, res ) => {
    posts.find()
        .then((posts) => {
            res.status(200).json(posts)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({
                message: "The posts information could not be retrieved"
            })
        })
})

router.get('/api/posts/:id', ( req, res ) => {
    posts.findById(req.params.id)
        .then((post) => {
            if(post){
                res.status(200).json(post)
            } else {
                res.status(404).json({
                    message: "The post with the specified ID does not exist"
                })
            }
        })
        .catch((err) => {
            console.log(err)
            res.status(500).json({
                message: "The post information could not be retrieved"
            })
        })
})

module.exports = router