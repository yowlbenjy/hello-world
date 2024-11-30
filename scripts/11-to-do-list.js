const todoList = [];

function addtoList() {
  
  const inputElement = document.querySelector('.js-input-element');
  const inputValue = inputElement.value;
  todoList.push(inputValue);
  inputElement.value = '';

  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }

  document.querySelector('.js-list').innerHTML = todoListHTML;
}

// Add an event listener for the Enter key
document.querySelector('.js-input-element').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addtoList(); // Call the function when Enter is pressed
  }
});


function renderList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }

  document.querySelector('.js-list').innerHTML = todoListHTML;

}