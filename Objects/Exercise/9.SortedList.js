function createSortedList(){
    const object = {
        numbers: []
    };
    object.add = function(element){
        this.numbers.push(element)
        this.numbers.sort((a, b) => a - b);
        return this.numbers;
    };
    object.remove = function(index){
        delete this.numbers[index];
    };
    object.get = function(index){
       return this.numbers[index];
    }
    object.size = function(){
        return this.numbers.length;
    }
    return object;
}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7); 
//console.log(list);
console.log(list.get(1)); 
//console.log(list.get(1)); 
// list.remove(1); 
// console.log(list.get(1));