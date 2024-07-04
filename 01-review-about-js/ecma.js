const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Map, filter, etc.
const even = arr.filter((number) => number % 2 === 0);
console.log(even);

// Optional chaining
const firstStudent = {
    name: 'John',
    age: 29,
    passport: {
        number: 123456,
        country: 'USA',
    },
};

const secondStudent = {
    name: 'John',
    age: 29,
};

console.log(firstStudent?.passport?.country);
console.log(secondStudent?.passport?.country);
