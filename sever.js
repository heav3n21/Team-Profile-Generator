const express = require('express');
const engineer = require('./classes/db/engineer.json');
const manager = require('./classes/db/manager.json');
const intern = require('./classes/db/intern.json');
const app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.get('/', (req,res)=> {
   
})
app.get('/engineers',(req,res)=> {
    res.json(engineer)
})
app.get('/interns',(req,res)=> {
    res.json(intern)
})
app.get('/managers',(req,res)=> {
    res.json(manager)
})



app.listen(3001,()=>{
    `express sever on port 3001`
})