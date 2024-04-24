const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get("/",(req,res)=>{
 res.render('index');
});
app.get("/login",(req,res)=>{
    res.render('index');
});
app.get("/home",(req,res)=>{
    res.render('home');
});


app.get("/manhwa",(req,res)=>{
    res.render('manhwa');

});
app.get("/sproduct",(req,res)=>{
    res.render('sproduct');
});


app.get("/register",(req,res)=>{
    res.render('register');
});

app.get("/manhwa2",(req,res)=>{
    res.render('manhwa2');
});

app.post("/login",(req,res)=>{
  console.log(req.body);
  res.redirect('/home');
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
