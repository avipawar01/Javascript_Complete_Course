// Var Vs Let Vs Const
// keywords used to declare variables


// var is function-scoped or globally scoped. If declared inside a function, it's accessible throughout that function. If declared outside any function, it's globally accessible.
// Variables declared with var can be reassigned and redeclared within the same scope without error.
var a = 3;
console.log("Var Value", a);


// let is block-scoped. This means a variable declared with let is only accessible within the block (e.g., if statements, for loops, or any code enclosed in curly braces {}) where it is defined.
// Variables declared with let can be reassigned within their scope, but they cannot be redeclared within the same block scope.
let b = 10;
console.log("Value of Let: ", b);


// const is also block-scoped, similar to let.
//  Variables declared with const cannot be reassigned or redeclared after their initial assignment. They must be initialized at the time of declaration. However, if a const variable holds an object or array, the properties of that object or array can still be modified, but the variable itself cannot be reassigned to a different object or array.
const c = 23;
console.log("Value of Const: ", c);


function print(){
    var d = "Satish";

    // reassigned and redeclared
    var d = "avinash";
    console.log("Global Scope :", a);
    console.log("Fuctional Scope :", d);
}

// console.log("Fuctional Scope :", d);


a = 10;

// Function Call
print();