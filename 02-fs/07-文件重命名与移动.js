const fs = require('fs')

//重命名
// fs.rename('./hhh.txt','lll.txt',err=>{
//     if(err)
//     {
//         console.log('error')
//         return ;
//     }
//     console.log('success')
// })


//文件移动
fs.rename('./lll.txt','../练习/lll.txt',err=>{
    if(err)
    {
        console.log('error')
        return ;
    }
    console.log('success')
})