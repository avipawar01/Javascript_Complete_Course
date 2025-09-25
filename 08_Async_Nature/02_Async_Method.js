console.log("Shubham");

setTimeout(function add(a=4, b=5){
    console.log(a+b);
}, 3000)

console.log("Hello Javascript");

console.log("Code ends");

// setInterval(function add(a=4, b=5){
//     console.log(a+b);
// }, 5000)

let count = 0;

function incrementCounter() {
  count++;
  console.log("Counter:", count);
}

// Start the interval, calling incrementCounter every 1000 milliseconds (1 second)
const intervalId = setInterval(incrementCounter, 1000);

// After 5 seconds, stop the interval
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval stopped.");
}, 5000);