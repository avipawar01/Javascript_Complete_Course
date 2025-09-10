// Create Greet Function use if and else based on gender 
// Male -> Hello, Mr. Name
// Female -> Hello, Mrs. Name
// Other -> Hello, Name



function greet(fName, gender)  {

    if(gender == "Male") {
        console.log("Hello, Mr. ", fName);
    }
    else if(gender === "Female"){
        console.log("Hello, Mrs. ", fName);
    }
    else {
        console.log("Hello, ", fName);
    }

}


greet("Shubham", "Male");
greet("Shruti", "Female");



// create a function voter 
// age > 18 You are eligible for voting
// age == 18 Create Voter Id
// age < 18 Your are not eligible for voting

function voter(age){
    if(age > 18){
        console.log("you are eligible for voting",age);
    }
    else if(age==18){
        console.log("create voter id",age);
    }
    else{
        console.log("your are not eligible for voting");
    }
}

voter(18);

//Write a function checkEvenOdd(number) that takes a number as input and prints whether it is Even or
function checkEvenodd(number){
    if(number % 2 == 0){
        console.log(number + " "+"is Even");
    }
    else{
        console.log(number + " "+"is odd");
    }
}
checkEvenodd(10);
checkEvenodd(7);


//Write a function checkNumber(num) that checks if a number is positive, negative, or zero.
function checkNumber(num){
    if(num > 0 ){
        console.log(num +" " +"is positive");
    }
    else if(num < 0){
        console.log(num + " "+"is negative");
    }
    else{
        console.log("the number is zero");
    } 
}
checkNumber(6);
checkNumber(-5);
checkNumber(0);


//Write a function findLargest(a, b) that prints the largest number between a and b.
//(If both are equal, print "Both are equal").
function findLargest(a, b){
    if(a > b){
        console.log(a + " "+"is larger");
    }
    else if(b > a){
        console.log(b +  " "+" is lager");
    }
    else{
        console.log("Both are equal");
    }
}
findLargest(8,12);
findLargest(4,4);


//Write a function calculateGrade(marks) that gives grades based on the following:
// marks >= 90 → "A"
// marks >= 75 → "B"
// marks >= 50 → "C"
// marks < 50 → "Fail"
function calculateGrade(marks){
    if(marks >=90){
        console.log("Grade : A");
    }
    else if(marks >=75){
        console.log("Grade : B");
    }
    else if(marks >=50){
        console.log("Grade : C");
    }
    else{
        console.log("Grade : Fail");
    }
}
calculateGrade(90);
calculateGrade(35);


//Write a function login(username, password) that checks:
function login(username, password){
if(username==="admin" && password==="1234"){
    console.log("login successful");
}
else{
    console.log("Invalide Credantials");
}
}
login("admin","1234");
login("user","abcd");