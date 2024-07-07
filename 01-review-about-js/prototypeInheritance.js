function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    return `Hello, my name is ${this.name}`;
};

function Employee (name, position) {
    Person.call(this, name);
    this.position = position;
}

// Employee inherits from Person
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Add a new method, specific from Employee

Employee.prototype.sayPosition = function() {
    console.log(`Hello, my name is ${this.name} and I am a ${this.position}`);
};
