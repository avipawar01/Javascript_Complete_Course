// anonymous function

let profile = {
    name: "Shubham",
    surname: "Yeram",
    age: 23,
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




console.log(profile.name, profile['name']);

console.log(profile.fullName());

console.log(profile.address.city);



// Objects Creation

let person = new Object();
person.fName = "Avinash";
person.lName = "Pawar";
person.age = 20;

console.log(person);



const person1 = new Object({
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
});

console.log(person1)