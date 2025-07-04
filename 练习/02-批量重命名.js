const fs = require('fs')

let data = fs.readdirSync('../02-fs')
console.log(data)

data.forEach(item=>{
    let [num,d] = item.split('-')
    if(Number(num)<10)
    {
        num = '0' +num
    }
    let name = num + '-' + d
    fs.rename(`../02-fs/${item}`,`../02-fs/${name}`,err=>{
        if(err)
        {
            console.log('error')
        }
        else{
            console.log('success')
        }
    })
})