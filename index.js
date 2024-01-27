const express= require('express');
const app= express();
const ejs= require('ejs');
const path= require('path');
app.set("view engine","ejs");
console.log(path.join(__dirname),"views");

app.get('/' ,(req,res)=>{
    res.render("index",{Title:"index"})
});
app.get('/about' ,(req,res)=>{
    res.render("about",{Title:"About"})
})
app.get("*" ,(req,res)=>{
    res.render("error")
})

app.listen(5001,console.log("running..."))