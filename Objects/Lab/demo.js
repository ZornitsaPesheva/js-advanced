const person = {
    name: 'Peter',
    age: 23,
    ssyHi() {
        console.log(`${this.name} says hi`);
    }
}

person.ssyHi();

let count = 5;
const parser = {
    increment() {count++;}
};

const command = 'increment';
parser[command] ? parser['increment']() : undefined;

console.log(count);