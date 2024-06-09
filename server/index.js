// const express = require('express');
import express, { response } from 'express'
import { getting } from './apiii.js';
// import 

const app = express();
const PORT = 3003;

const USERS = [{
  username: "Hi",
  id : 2
},
{
  username: "Hello",
  id : 1
}]

app.get('/', (req, res)=>{
  res.send('HEllo')
})

app.get('/users', (req, res)=>{
  res.send(USERS)
})

app.get('/from_api', getting, (req, res)=> {
  let aaa = req.triallll
  // aa = aaa.push({Us : 'JAFjk'})
  // res.send(aaa.push({Us : 'JAFjk'}))
  res.send(aaa)
})

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);