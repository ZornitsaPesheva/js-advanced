function getFibonator() {
    let previousNum = 0;
    let num = 1
    function fibonacci() {
        let result = previousNum + num;
        previousNum = num;
        num = result;
        return previousNum;
    }
    return fibonacci
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 1