// Callback Function
// a function that is passed as an argument to another function, and is then executed at a later time or after a specific operation completes

function add(a, b){
    return a+b;
}

function sub(a, b){
    return a-b;
}

function mul(a, b){
    return a*b;
}


function div(a, b){
    return a/b;
}

function rem(a, b){
    return a%b;
}


function calculate(a, b, fn){
    console.log(fn(a, b));
}

calculate(10, 10, sub);


// Callback Hell -> Callback hell, also known as the "Pyramid of Doom," is a phenomenon in JavaScript asynchronous programming where multiple nested callback functions lead to code that is difficult to read, understand, and maintain.


setTimeout(() => {
    function print(){
        function print1(){
            setInterval(() => {
                console.log("Javascript");
            }, 1000);
            console.log("Hello From Avinash")
        }
        console.log('Hello World');
        print1();
    }
    print();
}, 5000)


// JSON -> Javscript Object Notation