// 1. Basic Promise Creation

// Write a function that returns a Promise which resolves with the message "Hello, World!" 
// after 2 seconds.

setTimeout(function print() {
    console.log("Hello World!");
}, 2000);

//2. Promise with Conditional Resolve/Reject

// Create a function that returns a Promise. The Promise should:

// Resolve if the given number is even.

// Reject if the number is odd.

function checkevenodd(num){
    return new Promise((resolve,reject) => {
        if(num % 2  === 0){
            resolve("is even");
        }
        else{
            reject("is odd");
        }
    });
}
checkevenodd(10)
  .then((res) => {
    console.log("Resolved:", res);
  })
  .catch((err) => {
    console.log("Rejected:", err);
  });

  //3. Promise Chaining

// Write a function that simulates three asynchronous tasks (e.g., step 1 → step 2 → step 3) using 
// Promises and .then() chaining, where the output of one step is passed to the next.

function step1(){
    return new Promise(() => {
        console.log("step 1 completed");
        resolved("Data form step 1");
    },1000);
}
function step2(){
    return new Promise(() => {
        console.log("step 2 completed,received:",prevData);
        resolved("Data form step 2");
    },1000);
}
function step3(){
    return new Promise(() => {
        console.log("step 3 completed");
        resolved("step 3 completed,received:",prevData);
    },1000);
}

step1()
.then((result1)=> step2(result1))
.then((result2)=> step3(result2))
.then((finalResult)=>{
    console.log("All steps finished!");
    console.log("Final Output:",finalResult);
})
.catch((error)=>{
    console.log("somwthing went erroe:".error);
}) 

//4. Handling Errors in Promises

// Create a function that returns a Promise which rejects with an error message. 
// Demonstrate how to handle the error using .catch().
function errorPromise(){
    return new Promise((resolve,reject) => {
        let success = false;
        if(success){
            resolve("promise resolved successfully!");
        }
        else{
            reject("something went wrong!");
        }
    });
}
errorPromise()
.then((result)=>{
    console.log("success:",result);
})
.catch((Error)=>{
    console.log("Error:",Error);
})

// 5. Multiple Promises (Advanced)

// Write a program that simulates fetching data from three different sources using Promises.
//  Use Promise.all() to wait for all results and Promise.race() to return the fastest one.