/* diz-se que uma linguagem de programação tem
-funções de primeira classe quando as funções nessa linguagem são tratadas como qualquer outra variável
*/



const add = function(a, b) {
    return a + b
}

const subtract = function(a, b) {
    return a - b
}

const multiply = (x, y) => x * y
const divide = (x, y) => x / y


console.log(add(10, 20))
console.log(subtract(10, 20))
console.log(multiply(10, 20))