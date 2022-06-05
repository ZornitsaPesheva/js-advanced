function add(a) {
    let sum = a;

    function addToInternal(b) {
        sum += b;
        return addToInternal;
    }

    addToInternal.toString = () => {
        return sum;
    }

    return addToInternal;
}

console.log(add(1)(6)(-3).toString());