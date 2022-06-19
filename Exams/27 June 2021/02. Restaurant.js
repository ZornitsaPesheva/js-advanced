// https://judge.softuni.org/Contests/Practice/DownloadResource/14601

class Restaurant {
    constructor(budget) {
        this.budgetMoney = budget,
        this.menu = {},
        this.stockProducts = {},
        this.history = []; 
    }

    loadProducts(array) {
        array.forEach(p => {
            let [productName, productQuantity, productTotalPrice] = p.split(' ');
            
        });
    }

}