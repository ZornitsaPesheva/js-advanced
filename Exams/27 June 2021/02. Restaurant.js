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

    addToMenu(meal, neddedProducts, price) {
        if (!(meal in menu)) {
            menu[meal] = {neddedProducts, price};
            if(Object.keys(menu).length == 1) {
                return `"Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
            }
            else {
                return `Great idea! Now with the ${meal} we have ${Object.keys(menu).length} meals in the menu, other ideas?`
            }
        }
        else {
            return `The ${meal} is already in the our menu, try something different.`
        }
    }

}