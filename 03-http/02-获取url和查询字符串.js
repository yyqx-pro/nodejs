// //方式一
// const http = require('http')

// //导入url模块
// const url = require('url')

// const server = http.createServer((request,response)=>{
//     //解析request.url
//     let res = url.parse(request.url,true)
//     console.log(res)

//     console.log(res.pathname)
//     console.log(res.query.key)

//     response.end('url')
// })

// server.listen(9000,()=>{
//     console.log('9000 open')
// })

//方式二
const http =  require('http')

const server = http.createServer((request,response)=>{
    //实例url对象
    let url = new URL(request.url,'http://127.0.0.1:9000')
    // console.log(url)
    console.log(url.pathname)
    //参数必须通过get获取
    console.log(url.searchParams.get('key'))
    response.end('url new')
})

server.listen(9000,()=>{
    console.log('9000 open')
})