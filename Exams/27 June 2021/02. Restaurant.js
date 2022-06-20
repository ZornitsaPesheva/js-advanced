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
                this.budgetMoney -= productTotalPrice; 
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`)
            }
            else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`)
            }
        });
        return this.history.join('\n');
    }

    addToMenu(meal, neddedProducts, price) {
        if (!(meal in this.menu)) {
            this.menu[meal] = {neddedProducts, price};
            if(Object.keys(this.menu).length == 1) {
                return `"Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
            }
            else {
                return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
            }
        }
        else {
            return `The ${meal} is already in the our menu, try something different.`
        }
    }

    showTheMenu() {
        let result = [];
        if (Object.keys(this.menu).length == 0) {
            return "Our menu is not ready yet, please come later...";
        }
        for (const [meal, price] of Object.entries(this.menu)) {
            result.push(`${meal} - $ ${price}`);
        }
        return result.join('\n');
    }

    makeTheOrder(meal) {
        if (!(meal in this.menu)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }
        this.menu[meal].neddedProducts.forEach(p => {
            let [name, quantity] = p.split(' ');
            if (!(name in this.stockProducts)) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
            }
        });
        this.menu[meal].neddedProducts.forEach(p => {
            let [name, quantity] = p.split(' ');
            this.stockProducts[name] -= quantity;
        });

        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    }

}

let test = new Restaurant(1000);
test.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']);
