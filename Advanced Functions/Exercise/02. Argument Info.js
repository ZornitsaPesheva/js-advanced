function displayInfo(...arguments) {
    const list = [];
    const unique = {};

    [...arguments].forEach( a => {
        let argument = {};
        
        if (typeof a == 'object') {
            argument[typeof a] = '';

        }
        else {
            argument[typeof a] = a.toString();
        }
        
        
        
        list.push(argument);
        if (unique.hasOwnProperty(typeof a)) {
            unique[typeof a] += 1;
        }
        else {
            unique[typeof a] = 1;
        }
    });
    
    list.forEach(el => {
        console.log(`${Object.keys(el)}: ${Object.values(el)}`);
    });
    
    let sorted = [];
    for (var prop in unique) {
        sorted.push([prop, unique[prop]]);
    }
    
    sorted.sort(function(a, b) {
        return b[1] - a[1];
    });

    sorted.forEach(el => {
            console.log(`${el[0]} = ${el[1]}`);
        });
}

//displayInfo('cat','dog', 42, function () { console.log('Hello world!'); })
displayInfo({ name: 'bob'}, 3.333, 9.999);