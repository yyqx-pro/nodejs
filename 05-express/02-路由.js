const express = require('express')

const app = express()

app.get('/home',(req,res)=>{
    res.end('get home')
})

app.get('/',(req,res)=>{
    res.end('get /')
})

app.post('/form',(req,res)=>{
    res.end('form')
})

app.all('/test',(req,res)=>{
    res.end('test')
})

app.use((req,res)=>{
    res.end('not found')
})

app.listen(9000,()=>{
    console.log('9000 open')
})