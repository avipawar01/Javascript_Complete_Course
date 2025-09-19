const newDiv = document.createElement('div');

// Setting Content and Attributes

newDiv.textContent = "Hello World";
newDiv.setAttribute('class', 'container');


const para = document.createElement('p');
para.innerHTML(newDiv)
para.innerText(newDiv)


// Appending to the DOM

// parentNode.appendChild(childNode)

newDiv.appendChild(para);


document.body.appendChild(newDiv); // Appends to the <body>


