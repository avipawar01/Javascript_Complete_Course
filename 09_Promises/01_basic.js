// Promises are synctactical sugar for async sugar
// Promises in JavaScript are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. They provide a structured way to handle asynchronous code, making it more readable and manageable than traditional callback-based approaches. 



// Creating Promises

// A new Promise is created using the Promise constructor, which takes an executor function as an argument. The executor function itself takes two arguments: resolve and reject

let promise = new Promise((resolve, reject) => {
    let success = true;
    if(success){
        resolve("Success");
    }else {
        reject("Error");
    }
})



// Consuming a Promise
// Promises are consumed using the .then() and .catch() methods

promise.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})



// Promises Chaining 

// fetch('https://fakestoreapi.com/products/')
//             .then(res=>res.json())            
//             .then(json=>console.log(json))



const abc = fetch('https://fakestoreapi.com/products/')
console.log(abc);

abc.then(res => res.json())
    .then((json) => {
    console.log(json);
})