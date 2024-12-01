const todoList = [{
  task: 'make dinner',
  dueDate: '2022-12-22'
}, {
  task: 'wash',
  dueDate: '2022-12-22'
}];

renderList();

function addtoList() {

  const inputElement = document.querySelector('.js-input-element');
  const task = inputElement.value;

  const dateinputElement = document.querySelector('.js-date-input-element');
  const dueDate = dateinputElement.value;


  todoList.push({
    task,
    dueDate
  });
  inputElement.value = '';
  dateinputElement.value = '';

  let todoListHTML = '';
  document.querySelector('.js-list').innerHTML = todoListHTML;
  renderList();
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
    const todoObject = todoList[i];
    const { task, dueDate } = todoObject;
    //const date = todoObject.dueDate;
    const html = `
      <div>${task}</div>
      <div>${dueDate}</div>
      <button class="delete-button" onclick = "
        todoList.splice(${i},1);
        renderList();
        ">Delete</button>
      `;
    todoListHTML += html;
  }

  document.querySelector('.js-list').innerHTML = todoListHTML;

}