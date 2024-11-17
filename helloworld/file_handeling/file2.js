let file=require('fs')

file.writeFileSync('./new.txt','hello file 2-2')
file.appendFileSync('./new.txt','hello boss')
const res=file.readFileSync('./text.txt','utf-8')
console.log(res)
