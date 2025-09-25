// 1. Question: Write a program that prints "Hello, World!" after 3 seconds using setTimeout.

setTimeout(function print() {
    console.log("Hello World!");
}, 3000);

// 2. Question: Write a program that prints "I love JavaScript!" to the console every 2 seconds.
// (Stop the program after it runs 5 times using clearInterval.)

let count = 0;
function incrementCounter() {
    console.log("I love JavaScript!");
}
const intervalId = setInterval(incrementCounter, 2000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval stopped.");
  }, 11000);

// 3.Question: Create a countdown timer that starts from 10 and prints numbers 10 → 0 every second.
// When the countdown reaches 0, print "Time’s Up!" and stop the timer.  

let count1 = 10;
function countdowntimer(){
    console.log(count1)
    count1--;
}
const intervalId1 = setInterval(countdowntimer, 1000);

setTimeout(() => {
    clearInterval(intervalId1);
    console.log("Time’s Up!");
}, 11000);


// 4.Make a button "Start Timer" that starts showing the current time every second using setInterval.
// Add a "Stop Timer" button that stops updating the time using clearInterval


let timer = 10;
function currenttimer() {
    console.log("Start timer");
    timer --;
}
const intervalId2 = setInterval(currenttimer, 1000);

setTimeout( () => {
clearInterval(intervalId2);
console.log("Stop Timer!");
},11000);

// 5.👉 Question: Create a typing effect where the text
// "Learning JavaScript is Fun!"
// appears on the screen one character at a time, with a delay of 200ms between each character.

count = "Learning JavaScript is Fun!";
let time = 0;

function typingeffect(){
    time ++;
    console.log("text:",count);
}
setTimeout(typingeffect, 200);
