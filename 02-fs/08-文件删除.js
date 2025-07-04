const fs = require('fs')

// fs.unlink('./www.txt',err=>{
//     if(err){
//         console.log('error')
//     }
//     else{
//         console.log('success')
//     }
// })

fs.rm('./lll.txt', err => {
    if (err) {
        console.log('error')
    }
    else {
        console.log('success')
    }
})