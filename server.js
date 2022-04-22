const http=require('http')
const fs=require('fs')
const_= require('lodash');
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method);
});
 const num=_.random(0,20)
 console.log(num)

 const greet=_.once(()=>{
     console.log('hello')
 })
res.setHeader('content-type','text/html');
// res.write('<head><link rel="stylesheet href="#"></head>' )
// res.write('<p>hello ninjas</p>')
// res.write('<p>hello again ninjas</p>')

fs.readFile('./views/index.html',(err,data)=>{
    if(err){
        console.log(err)
        res.end()
    }else{
        res.statusCode=200;
        res.end(data)
    }
})

res.end()


let path='./views/';
switch(req.url){
    case'/':
    path +='index.html';
    res.statusCode=202;

    break;
    case'./about.html':
    path+='about.html'
    res.statusCode=202;
    break;
    case'./about-us':
    res.statusCode=301;
    res.setHeader('Location','/about')

    default:
        path+='404-html';
        res.statusCode=404;
        break;
}



server.listen(3000, 'localhost', ()=>{
    console.log('listening for requesting ')
})