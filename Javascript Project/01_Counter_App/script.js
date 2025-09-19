let count = document.querySelector('.container')
let btn = document.getElementById('btn')


let value = 0;

function counter(){
    value = value+1;
    count.textContent = value;
}
function subtraction(){
    value = value-1 ;
    count.textContent = value;
}
function Reset(){
    value = 0;
    count.textContent = value;
}