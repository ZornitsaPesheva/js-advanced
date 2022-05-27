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
    
    console.log(items);
    console.log(allProducts);
}

lowestPricesInCities([
    'Sample Town | Sample Product | 1000', 
    'Sample Town | Orange | 2', 
    'Sample Town | Peach | 1', 
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);