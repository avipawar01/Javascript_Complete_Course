const form = document.getElementById('form');

const email = document.getElementById('email')
const fName = document.getElementById('name')
const mobile = document.getElementById('mobile')
const password = document.getElementById('password')
const file = document.getElementById('file')
const DOB = document.getElementById('DOB')
const error = document.querySelector('.error')
const result = document.querySelector('.result')
const mouseover = document.querySelector('#mouseover')


const submit = document.querySelector('.submit');


form.addEventListener('submit', handleLogin)

mouseover.onmouseover = function() {
  alert('Mouse entered the element!');
};

function handleOnmouseover() {
  submit.addEventListener('mouseover', () => {
    alert('submit');
  })
}


function changeText() {
  document.getElementById("myParagraph").innerText = "Button Clicked!";
}


handleOnmouseover();

function handleLogin() {
    // stop form from reloading page
    event.preventDefault();

    let emailVal = email.value.trim()
    let nameVal = fName.value.trim()
    let mobileVal = mobile.value.trim()
    let passwordVal = password.value.trim()
    let fileVal = file.files[0]; 


    if(emailVal == "" || nameVal == "" || mobileVal == "" || passwordVal == ""){
        error.textContent = "Please Fill all the fields"
        result.innerHTML = "";
        return;
    }

    // if(emailVal == "avinash@gmail.com" || nameVal == "Avinash" || mobileVal == "1234567890" || passwordVal == "Avinash@123"){
    //     result.innerHTML = "Welcome, Avinash"
    //     return;
    // }
    let mobileValidationCheck = /^[0-9]{10}$/;
    if (mobileValidationCheck.test(mobileVal) == false) {
      error.textContent = "❌ Mobile number must be 10 digits.";
      return;
    }

    let imgURL = URL.createObjectURL(fileVal);
    
    result.innerHTML = `
        <h1>Welcome ${nameVal}</h1>
        <h1>Email ${emailVal}</h1>
        <h1>Mobile ${mobileVal}</h1>
        <img>${imgURL}</img>
        <img src="${imgURL}" width="200"></img>
    `

    form.reset();
  
}

function addListeners(){
  mobile.addEventListener('change', (e) => {
    console.log("Mobile Number Entered: ", e.target.value);
  })

  email.addEventListener('change', (e) => {
    console.log("Email Entered: ", e.target.value);
  })
}
addListeners();
