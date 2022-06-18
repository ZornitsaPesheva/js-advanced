// https://judge.softuni.org/Contests/Practice/DownloadResource/18736

class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        let typesToAdd = [];
        vegetables.forEach(v => {
            let veg = v.split(' ');
            let type = veg[0];
            let quantity = veg[1];
            let price = veg[2];
            let vegetable = this.availableProducts.find(v => v.type == type);
            if (vegetable) {
                vegetable.quantity += quantity;
                if (price > vegetable.price) {
                    vegetable.price = price;
                }
            }

            else {
                this.availableProducts.push({type, quantity, price});
            }
            if (!typesToAdd.some(t => t == type)){
                typesToAdd.push(type);
            }
        });

        return 'Successfully added ' + typesToAdd.join(', ');
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        selectedProducts.forEach(v => {
            let veg = v.split(' ');
            let type = veg[0];
            let quantity = Number(veg[1]);
            let vegetable = this.availableProducts.find(v => v.type == type)
            if (!vegetable) {
                throw new Error(`${type} is not available in the store, your current bill is ${totalPrice.toFixed(2)}.`)
            }
            if (quantity > vegetable.quantity) {
                console.log(quantity, vegetable.quantity);
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is ${totalPrice}.`)
            }
            let priceForType = vegetable.price * quantity;
            totalPrice += priceForType;
            vegetable.quantity -= quantity;
        })
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    rottingVegetable(type, quantity){
        let vegetable = this.availableProducts.find(v => v.type == type)
        if (!vegetable) {
            throw new Error(`${type} is not available in the store.`)
        }
        if (quantity > vegetable.quantity) {
            vegetable.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`
        }
        else {
            vegetable.quantity -= quantity;
            return `Some quantity of the ${type} has been removed.`
        }
    }

    revision() {
        let result = [];
        this.availableProducts.forEach(v => result.push(`${v.type}-${v.quantity}-$${v.price}`));
        result = "Available vegetables:" + result.sort((v1, v2) => v1.price - v2.price).join('\n') 
            + `The owner of the store is ${this.owner}, and the location is ${this.location}.`
        return result;
    }
}

 let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
 console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
 console.log(vegStore.buyingVegetables(["Okra 1"]));
 console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
 console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));
