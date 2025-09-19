const elementToRemove = document.getElementById('myNewDiv');
if (elementToRemove == true) {
    elementToRemove.remove();
}


// Remove Specific Child
// parentNode.removeChild(childNode)

const parentElement = document.body;
const childElement = document.getElementById('myNewDiv');
if (parentElement && childElement) {
    parentElement.removeChild(childElement);
}


// Remove from parent node 

const elementToRemoveParent = document.getElementById('myNewDiv');
if (elementToRemoveParent && elementToRemoveParent.parentNode) {
    elementToRemoveParent.parentNode.removeChild(elementToRemoveParent);
}