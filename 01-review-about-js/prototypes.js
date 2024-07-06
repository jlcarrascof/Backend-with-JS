function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = () => {
    return `Hello, my name is ${this.name}`;
};

const person = new Person('John Doe');

console.log(person); // Person { name: 'John Doe' }
console.log(person.name); // John Doe
console.log(person.sayHello()); // Hello, my name is John Doe
