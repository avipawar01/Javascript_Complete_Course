//number string boolean undefind null 

//.number
let age=20;

console.log("My age is this: ", age); 

//string
let a ="Avinash";

console.log("Hi,my name is:",a);

//boolean

let b = true;

let e = "Avinash";
const i = 25;
console.log("Hi,my age is:",i);
console.log("this is my name:",e);


let f = "Hello";
let g = 42;
console.log(f);
console.log(g);

const h = true;
console.log("value of const:",h);

const array = [1, 2, 3];
console.log("Value of const:",array);

const object = { name: "John", age: 30 };
console.log("this is my:",object);

const numbers = [1, 2, 3, 4, 5];
console.log("Value of const:",numbers);

const doubled = numbers.map(num => num * 2);
console.log("value of const:",doubled);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("value of const:",evenNumbers);

const found = numbers.find(num => num > 3);
console.log("value of const:",found);

const [first, second,] = [1, 2, 3];
console.log("value os const:",first,second);

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log("value of const:",arr1);

const obj1 = { a: 1, b: 2 };
console.log("value of const:",obj1);

//Hosting
let j = 30;
let k = 5;

function div(){
    console.log(j/k);
}

div();

let fname="Avinash";
console.log(fname);

function print(){
    console.log(sname);
}

let sname="Pawar";

print();