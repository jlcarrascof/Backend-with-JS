function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    return `Hello, my name is ${this.name}`;
};

const person = new Person('John Doe');

console.log(person); // Person { name: 'John Doe' }
console.log(person.name); // John Doe
console.log(person.sayHello()); // Hello, my name is John Doe
console.log(person.prototype); // undefined
console.log(person.__proto__); // { sayHello: [Function] }
