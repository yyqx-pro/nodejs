const fs = require('fs')

//方式一
// const rs = fs.createReadStream('../02-fs/stream.txt')
// const ws = fs.createWriteStream('../02-fs/www.txt')

// rs.on('data',chunk=>{
//     console.log(chunk.toString())
//     ws.write(chunk.toString())
// })

//方式二
// rs.pipe(ws)

let data = fs.readFileSync('../02-fs/stream.txt')

fs.writeFileSync('../02-fs/www.txt',data)