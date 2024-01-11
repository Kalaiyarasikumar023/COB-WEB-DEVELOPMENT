document.getElementById('add-todo').addEventListener('click', addTodo);

function addTodo() {
  var todoText = document.getElementById('new-todo').value;

  if (todoText.trim() !== '') {
    var todoList = document.getElementById('todo-list');

    var li = document.createElement('li');
    li.className = 'todo-item';

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    var span = document.createElement('span');
    span.textContent = todoText;

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
      li.remove();
    };

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    todoList.appendChild(li);

    document.getElementById('new-todo').value = '';
  }
}
