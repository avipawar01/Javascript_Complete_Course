const form = document.getElementById('form');

const email = document.getElementById('email')
const fName = document.getElementById('name')
const mobile = document.getElementById('mobile')
const password = document.getElementById('password')

const error = document.querySelector('.error')
const result = document.querySelector('.result')


const submit = document.getElementsByClassName('submit');


form.addEventListener('submit', handleLogin)


function handleLogin() {
    // stop form from reloading page
    event.preventDefault();

    let emailVal = email.value.trim()
    let nameVal = fName.value.trim()
    let mobileVal = mobile.value.trim()
    let passwordVal = password.value.trim()

    if(emailVal == "" || nameVal == "" || mobileVal == "" || passwordVal == ""){
        error.textContent = "Please Fill all the fields"
        result.innerHTML = "";
        return;
    }

    // if(emailVal == "avinash@gmail.com" || nameVal == "Avinash" || mobileVal == "1234567890" || passwordVal == "Avinash@123"){
    //     result.innerHTML = "Welcome, Avinash"
    //     return;
    // }
    
    result.innerHTML = `
        <h1>Welcome ${nameVal}</h1>
        <h1>Email ${emailVal}</h1>
        <h1>Mobile ${mobileVal}</h1>
    `

    form.reset();

}