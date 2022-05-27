function townsToJSON(input) {
    result = [];
    for (let i = 1; i < input.length; i++) {
        let item = {}
        let itemFromInput = input[i].slice(0, -1).substring(1).split('|').map(item => item.trim());
        item.Town = itemFromInput[0];
        item.Latitude = Number(Number(itemFromInput[1]).toFixed(2));
        item.Longitude = Number(Number(itemFromInput[2]).toFixed(2));
        result.push(item);
    }
    console.log(JSON.stringify(result));
}

townsToJSON([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);
// townsToJSON([
//     '| Town | Latitude | Longitude |',
//     '| Veliko Turnovo | 43.0757 | 25.6172 |',
//     '| Monatevideo | 34.50 | 56.11 |'
// ]);