
let buf1 = Buffer.from([105,108,111,118,101,121,111,117])
console.log(buf1.toString())//iloveyou

let buf2 = Buffer.from('hello')
console.log(buf2[0])//104--十进制
console.log(buf2[0].toString(2))//011010000--二进制
console.log(buf2)//<Buffer 68 65 6c 6c 6f>
buf2[0] = 95 //可以用于修改buffer值
console.log(buf2)//<Buffer 5f 65 6c 6c 6f>
console.log(buf2.toString())//_ello 