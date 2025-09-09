// Javscript Hosting 

// Hoisting in JavaScript refers to the behavior where declarations of variables, functions, and classes are conceptually "moved" to the top of their respective scopes before the code execution begins. This means that you can use a variable or call a function before its actual declaration in the code, without encountering a ReferenceError

let a = 24;
console.log("value of let:",a);

let fname ="Avinash";
console.log(fname);


function print(){
    console.log(sname); 
}
let sname="Pawar";

print();