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



// The Object.keys() method returns an array with the keys of an object.
const keys = Object.keys(profile);
console.log(keys);

const values = Object.values(profile);
console.log(values);


const entries = Object.entries(profile);
console.log(entries);