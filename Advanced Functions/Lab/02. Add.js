function solution(number) {
    function functionAdd(newNumber) {
        return Number(number) + Number(newNumber);
    };
    return functionAdd;
}



let add5 = solution(5);

console.log(add5(2));

console.log(add5(3));