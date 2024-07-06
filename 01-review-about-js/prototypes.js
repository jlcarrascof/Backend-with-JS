function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    console.log("Hello, my name is " +  this.name);
};

const person = new Person('John Doe');
person.sayHello();
