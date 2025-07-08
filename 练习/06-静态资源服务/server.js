const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((request, response) => {
    //读文件
    const { pathname } = new URL(request.url, 'http://127.0.0.1:9000')
    let url = path.resolve(__dirname,`./page${pathname}`)
    console.log(url)
    fs.readFile(url,(err,data)=>{
        if(err)
        {
            switch(err.code)
            {
                case 'ENOENT':
                    response.statusCode=404;
                    response.end('NOT FOUND');
                    break;
            }
            console.log(err)
            return ;
        }
        response.end(data)
    })
})

server.listen(9000, () => {
    console.log('9000 open hhh hhh')
})