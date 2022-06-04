function createProcessor() {
    let state = '';

    function append(str) {
        state += str;
    }

    function removeStart(n) {
        state = state.slice(n);
    }

    function removeEnd(n) {
        state = state.slice(0, -n);
    }

    function print() {
        console.log(state);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }
}

let proc = createProcessor();
proc.append('hello'); 
proc.append('again'); 
proc.removeStart(3); 
proc.removeEnd(4); 
proc.print();