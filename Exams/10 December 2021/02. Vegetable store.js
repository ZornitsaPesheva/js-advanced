// https://judge.softuni.org/Contests/Practice/DownloadResource/18736

class VgetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        vegetables.forEach(v => {
            [type, quantity, price] = v.split(' ');
            let vegetable = this.availableProducts.find(v => v.type == type)
            if (vegetable) {
                vegetable.quantity += quantity;
            }
            if (price > vegetable.price) {
                vegetable.price = price;
            }
            else {
                this.availableProducts.push({type, quantity, price});
            }
        });
        let result = [];
        vegetable.map(v => v.type).reduse((v1, v2) => (v1.type != v2.type)).forEach(v => result.push(v.type));
        return 'Successfully added' + result.join(', ');
    }
}
