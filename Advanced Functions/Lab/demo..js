function printConntext(a, b) {
    console.log(a + b);

    console.log(this);
}

const obj = {
    counter: 5,
 //   printConntext
}

printConntext(3, 5);

printConntext.call(obj, 4, 7);

// obj.printContext();

// document.querySelector('button').addEventListener('click', obj.printConntext);