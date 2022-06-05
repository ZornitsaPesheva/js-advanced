function displayInfo(...arguments) {
    const list = [];

    [...arguments].forEach( a => {
        let argument = {};
        argument[typeof a] = a.toString();
        list.push(argument);
    });
    
    console.log(list);

}

displayInfo('cat', 42, function () { console.log('Hello world!'); })