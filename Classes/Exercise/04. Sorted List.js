class List{
    constructor(){
        this.collection = [];
        this.size = this.collection.length;
    }
    add(element) {
        this.collection.push(element);
        this.size = this.collection.length;
        this.collection.sort((a, b) => a - b);
    }

    remove(index) {
        if (index < 0 || index >=this.collection.length) {
            throw new Error('Invalid index!')
        }
        else {
            this.collection.splice(index, 1);
            this.size = this.collection.length;
        }
    }

    get(index) {
        return this.collection[index];
    }
}

let myList = new List();
myList.add(5);
console.log(myList.get(0));
myList.add(3);
console.log(myList.get(0));
myList.remove(0);
console.log(myList.get(0));
console.log(myList.size);
