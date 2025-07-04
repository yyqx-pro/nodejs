//一、buffer的创建
//1.alloc
let buf = Buffer.alloc(10)
console.log(buf)//<Buffer 00 00 00 00 00 00 00 00 00 00>

//2.allocUnsafe
let buf2 = Buffer.allocUnsafe(10)//可能会有旧数据，因为对一段内存空间进行复用的时候不会对该空间进行清空
console.log(buf2)//<Buffer 00 00 00 00 00 00 00 00 00 00>

//3.from
let buf3 = Buffer.from('hello')//将字符串或者数组转换成字符串
let buf4 = Buffer.from([104,107,201])
console.log(buf3)//<Buffer 68 65 6c 6c 6f>--十六进制的ASCll码
console.log(buf4)//<Buffer 68 6b c9>--十六进制的ASCll码