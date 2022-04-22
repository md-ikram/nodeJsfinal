const name='mario'
console.log(name)
const greet=(name)=>{
    console.log(`hello , ${name}`);
}
greet('mario')
greet('yoshi')

//globar object
setTimeout(()=>{
    console.log("in the timeout")
    clearInterval(int);
},3000)

const int=setInterval(()=>{
    console.log('in the interval')
},3000)

console.log(__dirname);
console.log(__filename);

//queryselector
console.log(document.querySelector)