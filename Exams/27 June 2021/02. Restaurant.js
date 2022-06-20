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
            if (productTotalPrice <= this.budgetMoney) {
                if (productName in this.stockProducts){
                    this.stockProducts[productName] =+ productQuantity;
                }
                else {
                    this.stockProducts[productName] = productQuantity;
                }
                this.budget -= productTotalPrice; 
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`)
            }
            else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`)
            }
        });
        return this.history.join('\n');
    }

}