// Number
const thisIsANumber = 1;

// String
const thisIsAString = 'hello';

// Boolean
const thisIsABoolean = true;

// Array
const firstArray = [1, 2, 3];
const secondArray = [1, 'a', false];

// Object
const thisIsAnObject = {
    name: 'John Doe',
    age: 30,
};

// Undefined
const thisIsUndefined = undefined;

// Null
const thisIsNull = null;

// Using Dictionary
const dictionary = new Map();
dictionary.set('name', 'John Doe');
console.log(dictionary.get('name'));

dictionary.set('age', 30);
dictionary.set('name', 'Javier Martinez');
console.log(dictionary.get('name'));

console.log(dictionary);

const obj = {
    name: 'John Doe',
    age: 30,
};

console.log(obj);

// Using map()
const numbers = [1, 2, 3];
const newNumbers = numbers.map((number) => {
    return number * 2;
});
