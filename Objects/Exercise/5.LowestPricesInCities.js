function lowestPricesInCities(list) {
    let items = [];
    let allProducts = [];
    for (let item of list) {
        item = item.split(' | ');
        let product = item[1];
        items.push(item);
        allProducts.push(product);
    }
    allProducts = [...new Set(allProducts)];
    
    for (let product of allProducts) {
        let allCities = items.filter(i => i[1] == product);
        let minPrice =  Number.MAX_VALUE;
        let cityWitMinPrice = '';
        for (let city of allCities) {
            if (Number(city[2]) < minPrice){
                minPrice = Number(city[2]);
                cityWitMinPrice = city[0];
            }
        }
        console.log(`${product} -> ${minPrice} (${cityWitMinPrice})`);
    }
}

// lowestPricesInCities([
//     'Sample Town | Sample Product | 1000', 
//     'Sample Town | Orange | 2', 
//     'Sample Town | Peach | 1', 
//     'Sofia | Orange | 3',
//     'Sofia | Peach | 2',
//     'New York | Sample Product | 1000.1',
//     'New York | Burger | 10'
// ]);

lowestPricesInCities([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'Mexico City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Washington City | Mercedes | 1000',
])