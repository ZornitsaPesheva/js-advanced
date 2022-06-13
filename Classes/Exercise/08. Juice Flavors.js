function juiceFlavors(array) {
    
    let juces = new Map();
    let bottlesOfJuse = new Map();

    array.forEach(element => {
        let [juceName, quantity] = element.split(' => ');
        if (juces.has(juceName)) {
            let qtt = juces.get(juceName) + Number(quantity);
            juces.set(juceName, qtt);
        } else {
            juces.set(juceName, Number(quantity));
        }

        if (juces.get(juceName) / 1000 >= 1) {
            let bottles = Math.floor(juces.get(juceName) / 1000);
            if (bottlesOfJuse.has(juceName)) {
                let qb = bottlesOfJuse.get(juceName) + Number(bottles);
                bottlesOfJuse.set(juceName, qb);
            } else {
                bottlesOfJuse.set(juceName, bottles);
            }
            let juseLeft = juces.get(juceName) % 1000;
            juces.set(juceName, juseLeft);
        } 
    });

    for (let [juceName, bottles] of bottlesOfJuse) {
        console.log(`${juceName} => ${bottles}`);
    }
}

// juiceFlavors(['Orange => 2000',

// 'Peach => 1432',

// 'Banana => 450',

// 'Peach => 600',

// 'Strawberry => 549']);

juiceFlavors(['Kiwi => 234',

'Pear => 2345',

'Watermelon => 3456',

'Kiwi => 4567',

'Pear => 5678',

'Watermelon => 6789']);