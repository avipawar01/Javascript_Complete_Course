// Create Greet Function use if and else based on gender 
// Male -> Hello, Mr. Name
// Female -> Hello, Mrs. Name
// Other -> Hello, Name



function greet(fName, gender){

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