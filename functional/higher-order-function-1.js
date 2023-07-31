/* 
funções que operam em outra função,
tomando-os como argumentos ou retornando-os, são chamados de função de ordem superior.
*/

function run(fn) {
   return `Result: ${fn()}`
}

function sayHello() {
    console.log('Hello!!')
}

run(sayHello)

run(function(){
    console.log('run!!!')
})

const result = run(Math.random)
console.log(result)