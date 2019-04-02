const express = require('express')
const router = express.Router()
// const bodyParser = require('body-parser')
const mongoose = require('mongoose')
     mongoose.connect('mongodb://localhost:27017/movie', {useNewUrlParser: true})
     .then(()=>console.log('connected'))
     .catch(()=>console.log(new Error('cannot connect')))


     
const Movie = mongoose.model('Movie',new mongoose.Schema({
    id:Number,
    name:{type:String},
    genere:{type:String},
    rating:Number,
    date:Date

}))

/////////middle wares

//////////////
router.get('/',(req,res)=>{
        Movie.find({},(err,data)=>{res.json(data)})    
})

router.post('/addMovie',(req,res)=>{
      const name = req.body.movieName
      const genere = req.body.movieGenere
      const rating = req.body.movieRating
       const date = req.body.Date
       const movie  = new Movie({id:1,name:name,genere:genere,rating:rating,date:date})
       
       movie.save()
        res.redirect('/')
      // res.render('./../views/addMovie')

})

router.post('/deleteMovie',(req,res)=>{
         const id = req.body.id
         async function deleteu()
         {
            const result = await Movie.deleteOne({id:id})
               if(result.n>0)
                 res.redirect('/')
                 else
                  res.send('./')
         }
          
         deleteu()
})

router.post('/updateMovie',(req,res)=>{
        id= req.body.id
        name=req.body.name
        genere=req.body.genere
        rating=req.body.rating
        date=req.body.date
        
        async function update()
        {
            const result = await Movie.updateOne({id:id},{
                $set:{
                    name:name,genere:genere,rating:rating,date:date
                }
            })
            if(result.n>0)
               res.redirect('/')
               else
                res.send('please enter a valid id')
           
        
        }
        update()
})

module.exports = router