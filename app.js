const express = require('express');
const BookData = require('./Backend/src/model/bookData');
const UserData = require('./Backend/src/model/userData')
const cors = require('cors');
var bodyparser=require('body-parser');
var app = new express();
const jwt = require('jsonwebtoken');
app.use(cors());
app.use(bodyparser.json());
const port = process.env.PORT || 3000;

const path = require('path');

app.use(express.static('./dist/frontend'));



app.post('/api/login',(req,res)=>{
        username=req.body.uname;
        password=req.body.password;
        let payload = {subject:username+password}
        let token = jwt.sign(payload,'secretKey')
        res.status(200).send({token})
        console.log(req.body.uname)
    console.log(req.body.password)  
    // }
    
})



app.get('/api/users',function(req,res){

    // res.header is for development mode. no need in live application
    res.header("Access-Control-Allow-Origin","*") 
    res.header('Access-Control-Allow-Methods:GET, POST, PATCH, PUT, DELETE, OPTIONS');
    UserData.find()
                .then(function(users){
                    res.send(users);
                });
});



app.get('/api/books',function(req,res){

    // res.header is for development mode. no need in live application
    
    BookData.find()
                .then(function(books){
                    res.send(books);
                    console.log('database reached app.js');
                });
});

app.post('/api/insert',function(req,res){
    
    console.log(req.body);
   
    var book = {       
        bookId : req.body.book.bookId,
        bookName : req.body.book.bookName,
        genre : req.body.book.genre,
        authorName : req.body.book.authorName,
        imageUrl : req.body.book.imageUrl,
   }       
   var book = new BookData(book);
   book.save();
});
app.get('/api/:id',  (req, res) => {
    
    const id = req.params.id;
      BookData.findOne({"_id":id})
      .then((book)=>{
          res.send(book);
      });
  })
app.put('/api/update',(req,res)=>{
    
    
    console.log(req.body)
    id=req.body._id,
    bookId= req.body.bookId,
    bookName = req.body.bookName,
    genre = req.body.genre,
    authorName = req.body.authorName,
    imageUrl = req.body.imageUrl,
   BookData.findByIdAndUpdate({"_id":id},
                                {$set:{"bookId":bookId,
                                "bookName":bookName,
                                "genre":genre,
                                "authorName":authorName,
                                "imageUrl":imageUrl
                                }})
   .then(function(){
       res.send();
   })
 })
 app.delete('/api/remove/:id',(req,res)=>{
   
    id = req.params.id;
   BookData.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('Deletion success')
        res.send();
    })
  })
    

app.listen(process.env.PORT || 3000, function(){
    console.log("server listening on port %d in %s mode", this.address().port, app.settings.env);
});

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/frontend/index.html'));
    });