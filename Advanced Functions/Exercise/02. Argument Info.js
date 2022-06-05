function displayInfo(...arguments) {

    let data = {};

    [...arguments].forEach( a => {
        let type = typeof a;
        console.log(`${type}: ${a}`);

        if(!data[type]) {
            data[type] = 0;
        }

        data[type]++;
    });
    
    Object.keys(data)
    .sort((a, b) => data[b] - data[a])
    .forEach((key) => console.log(`${key} = ${data[key]}`))
}

displayInfo( 42, 52, 'cat','dog', function () { console.log('Hello world!'); })
//displayInfo({ name: 'bob'}, 3.333, 9.999);