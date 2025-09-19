let title = document.getElementById('title')
let description = document.getElementById('description')
let submit = document.getElementById('submit');
let container = document.querySelector('.container')


const newDiv = document.createElement('div');
newDiv.textContent = "Hello World";
newDiv.setAttribute('class', 'container');


function addTodo(){
    let li = document.createElement('li')
    let desc = document.createElement('li');
    li.innerHTML = title.value;
    desc.innerHTML = description.value
    container.appendChild(li);
    container.appendChild(desc);
}


container.appendChild(newDiv);



newDiv.remove();


const todo = document.querySelector('.todo');
const heading = document.getElementsByTagName('h1')[0]

todo.removeChild(heading);