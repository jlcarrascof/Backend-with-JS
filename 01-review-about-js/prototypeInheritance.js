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
