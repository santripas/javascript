(function (a, b, c){
    return a + b + c
})


const x = 1
const sum = function (a , b){
    return a + b
}

const result = sum(7, 59)
console.log(result)

const anotherSum = sum
console.log(anotherSum(5, 9))

let X = 3
console.log(X)

X = sum
console.log(X(11, 16))