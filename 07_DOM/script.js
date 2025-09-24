// let title = document.getElementById('title')
// let description = document.getElementById('description')
// let submit = document.getElementById('submit');
// let container = document.querySelector('.container')


// const newDiv = document.createElement('div');
// newDiv.textContent = "Hello World";
// newDiv.setAttribute('class', 'container');


// function addTodo(){
//     let li = document.createElement('li')
//     let desc = document.createElement('li');
//     li.innerHTML = title.value;
//     desc.innerHTML = description.value
//     container.appendChild(li);
//     container.appendChild(desc);
// }



// // Delete functionality
// li.querySelector(".delete").addEventListener("click", () => {
//     li.remove();
// });

// container.appendChild(newDiv);



// newDiv.remove();


// const todo = document.querySelector('.todo');
// const heading = document.getElementsByTagName('h1')

// todo.removeChild(heading);



const titleInput = document.getElementById("title");
const descInput = document.getElementById("description");
const container = document.querySelector(".container");

function addTodo() {
    const titleVal = titleInput.value.trim();
    const descVal = descInput.value.trim();

    if (titleVal === "" && descVal === "") {
        alert("Please enter a task!");
        return;
    }

    // Create list item
    const li = document.createElement("li");
    li.innerHTML = `
        <div>
            <strong>${titleVal}</strong><br>
            <small>${descVal}</small>
        </div>
        <div class="actions">
            <button class="complete-btn">✔</button>
            <button class="delete-btn">❌</button>
        </div>
    `;

    // Complete button
    li.querySelector(".complete-btn").addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // Delete button
    li.querySelector(".delete-btn").addEventListener("click", () => {
        li.remove();
    });

    // Append to list
    container.appendChild(li);

    // Clear inputs
    titleInput.value = "";
    descInput.value = "";
}
