// https://judge.softuni.org/Contests/Practice/DownloadResource/14572

class ChristmasDinner {
    constructor(budget) {
        this._budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    set _budget(bgt) {
        if (bgt < 0){
            throw new Error("The budget cannot be a negative number")
        }
        this.budget = bgt;
    }

    shopping([type, price]) {
        if (this._budget < price){
            throw new Error("Not enough money to buy this product");
        }
        this.products.push({type, price});
        this._budget -= price;
        return `"You have successfully bought ${type}!`
    }
    
    recipes({recipeName, productsList}) {
        for (let p of productsList) {
            if (!this.products.find(pr => pr.type == p)){
                throw new Error("We do not have this product");
            }
        }
        this.dishes.push({recipeName, productsList});
        return `${recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish) {
        if (!this.dishes.find(d => d.recipeName == dish)){
            throw new Error('We do not have this dish');
        }
        if (name in this.guests) {
            throw new Error("This guest has already been invited");
        }
        this.guests[name] = dish;
        return `You have successfully invited ${name}!`
    }

    showAttendance() {
        let result = [];
        for (let name in this.guests) {
            let dish = this.guests[name];
            let products = this.dishes.find(d => d.recipeName == dish)[0].productsList;
            result.push(`${name} will eat ${dish}, which consists of ${products}`)
        } 
    }
}

let dinner = new ChristmasDinner(-300);

