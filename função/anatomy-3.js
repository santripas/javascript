const increment1 = function(n) {
    return n + 1
}


// Arrow Function é sempre anônima
const increment2 = (n) => {
    return n + 1
}

const increment3 = n => {
    return n + 1
}

const increment4 = n => n + 1


console.log(increment1(1))
console.log(increment2(5))
console.log(increment3(24))
console.log(increment3(199))

const sum = (a, b) => a + b
console.log(sum(3,8))