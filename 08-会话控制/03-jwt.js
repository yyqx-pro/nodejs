const jwt = require('jsonwebtoken')

//创建token
// jwt.sign(数据，加密字符串，配置对象)
let token = jwt.sign({
    username:'wyt'
},'wyuyyqxshgfd',{
    expiresIn:60//单位是秒
})

console.log(token)

//解析token
// jwt.verify(用户的token,加密字符串,回调函数)
jwt.verify(token,'wyuyyqxshgfd',(err,data)=>{
    if(err)
    {
        console.log('校验失败')
    }
    else{
        console.log(data)
    }
})