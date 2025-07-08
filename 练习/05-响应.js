const http = require('http')

// const server = http.createServer((request,response)=>{
//     response.end(`<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <style>
//         tr:nth-child(2n-1){
//             color: red;
//         }
//         td:active{
//             cursor: pointer;
//             background-color: pink;
//         }
//     </style>
// </head>
// <body>
//     <table border="1">
//         <tr>
//             <td>1</td>
//             <td>1</td>
//             <td>1</td>
//         </tr>
//         <tr>
//             <td>1</td>
//             <td>1</td>
//             <td>1</td>
//         </tr>
//         <tr>
//             <td>1</td>
//             <td>1</td>
//             <td>1</td>
//         </tr>
//         <tr>
//             <td>1</td>
//             <td>1</td>
//             <td>1</td>
//         </tr>
//     </table>
// </body>
// </html>`)
// })
const fs = require('fs')

const server = http.createServer((request,response)=>{
    //读文件
    let data = fs.readFileSync('./response.html')
    response.end(data)
})

server.listen(9000,()=>{
    console.log('9000 open')
})