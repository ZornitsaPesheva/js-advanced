function jsnsNotation(array){
    let numbers = [];

    function operate(a, b, operator) {
        switch ()
    }

    for(let i = 0; i < array.length; i++){
        if (typeof array[i] == number){
            numbers.push(array[i])
        }
        else {
            let a = numbers.pop();
            let b = numbers.pop();
            operate(a, b, operator);
        }
    }

}

jsnsNotation();
