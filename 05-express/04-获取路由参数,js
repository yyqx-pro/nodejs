const express = require('express')

const app = express()

app.get('/:id.html',(req,res)=>{
    console.log(req.params.id)
    res.end('query')
})

app.listen(9000,()=>{
    console.log('9000 open')
})