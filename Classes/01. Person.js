class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

const myPerson1 = new Person('John', 'Smith', 27, 'john.smith@mail.com');
const myPerson2 = new Person('Peter', 'Jackson', 27, 'peter.jacson@mail.com');

console.log(`${myPerson1}`);
console.log([myPerson1, myPerson2].join('\n'));