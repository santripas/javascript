
function sayHello() {
    console.log("Hello!")
}

sayHello()

function sayHelloTo(name) {
    console.log(`Hello ${name}!`)
}

sayHelloTo('Mike')

function returnHi(){
    return 'Hi!'
}

var greeting = returnHi()
console.log(greeting)
console.log(returnHi())

function returnHiTo(name){
    return `Hi ${name}!`
}

console.log(returnHiTo('Sandro'))