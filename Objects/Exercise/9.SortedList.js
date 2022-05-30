function createSortedList() {
    let list = [];
 
    function add(element) {
        list.push(element);
        list.sort((a, b) => a - b);
        this.size++;
    };
 
    function remove(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Index is out of bounds');
        }
        list.splice(index, 1);
        this.size--;
    };
 
    function get(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Index is out of bounds');
        }
        return list[index];
    };
 
    function size() {
        return this.size;
    };
 
    let obj = {add, remove, get, size: 0};
    return obj;
}



let list = createSortedList();
list.add(5);
list.add(6);
list.add(7); 

console.log(list.get(1)); 
list.remove(1); 
console.log(list.get(1));