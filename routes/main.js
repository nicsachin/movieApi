const express = require('express')
const router = express.Router()
const path = require('path')



//router.engine('html', require('ejs').renderFile);
router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/../views/all.html'))
})

router.get('/addMovie',(req,res)=>{
    res.sendFile(path.join(__dirname,'/../views/addMovie.html'))
})

router.get('/deleteMovie',(req,res)=>{
    res.sendFile(path.join(__dirname,'/../views/deleteMovie.html'))
})

router.get('/allMovie',(req,res)=>{
    res.sendFile(path.join(__dirname,'/../views/allMovie.html'))
})

router.get('/updateMovie',(req,res)=>{
    res.sendFile(path.join(__dirname,'/../views/updateMovie.html'))
})

module.exports = router