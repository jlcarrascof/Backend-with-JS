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

if (secondStudent?.passport?.country) {
    console.log('He has passport');
} else {
    console.log('He has no passport');
}

// Nullish operator

const age = 20;

// Without nullish operator

const canDrive = age >= 18 ? true : false;
console.log(canDrive);

// With nullish operator

const canDrive2 = age >= 18 ?? false;
console.log(canDrive2);
