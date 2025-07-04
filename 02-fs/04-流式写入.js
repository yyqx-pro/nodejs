const fs = require('fs')

//创建写入流对象
const ws = fs.createWriteStream('./stream.txt')

ws.write('yyqx')
ws.write('\rcyy')
ws.write('\rcxh')

//关闭通道
ws.close()