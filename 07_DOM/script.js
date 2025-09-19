let title = document.getElementById('title')
let description = document.getElementById('description')
let submit = document.getElementById('submit');
let container = document.querySelector('.container')


function addTodo(){
    let li = document.createElement('li')
    let desc = document.createElement('li');
    li.innerHTML = title.value;
    desc.innerHTML = description.value
    container.appendChild(li);
    container.appendChild(desc);
}