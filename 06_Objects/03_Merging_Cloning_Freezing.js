// Cloning

let profile = {
    name: "Shubham",
    surname: "Yeram",
    age1: 23,
    college: "PVPPCOE",
    fullName: function(){
        return this.name + " " + this.surname;
    },
    address: {
        street: "123 Main St",
        city: "Anytown",
        zipCode: "12345"
    },
    
}

const person1 = new Object({
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
});



let profile2 = {
    ...profile
}


// console.log(profile2);


const profile1 = Object.assign({}, profile)
// console.log(profile1);


// Spread Operator -> ...


// Merging
const merge = {
    ...profile,
    ...person1
}

console.log(merge);


const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObject = Object.assign({}, obj1, obj2);
console.log(mergedObject)



// Freezing

// Object.freeze() makes an object immutable, preventing the addition, deletion, or modification of its properties. Object.freeze().

const myObject = { a: 1, b: 2 };
Object.freeze(myObject);

myObject.c = 3;
console.log(myObject);