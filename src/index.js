document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('#create-task-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let todo = document.getElementById('new-task-description').value;
    buildToDo(todo);
    form.reset();
  });
});

function buildToDo(todo) {
  let li = document.createElement('li');
  let btnDelete = document.createElement('button');
  let btnEdit = document.createElement('button');

  btnDelete.addEventListener('click', handleDelete);
  btnDelete.textContent = 'x';

  btnEdit.addEventListener('click', handleEdit);
  btnEdit.textContent = 'edit';

  li.textContent = `${todo} `;
  li.appendChild(btnEdit);
  li.appendChild(btnDelete);

  document.querySelector('#tasks').appendChild(li);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}

function handleEdit(e) {
  let li = e.target.parentNode;
  let todo = li.firstChild.textContent.trim();
  let input = document.createElement('input');
  input.type = 'text';
  input.value = todo;

  let btnSave = document.createElement('button');
  btnSave.textContent = 'save';
  btnSave.addEventListener('click', () => handleSave(li, input.value));

  li.innerHTML = '';
  li.appendChild(input);
  li.appendChild(btnSave);
}

function handleSave(li, newValue) {
  li.innerHTML = `${newValue} `;
  let btnEdit = document.createElement('button');
  let btnDelete = document.createElement('button');

  btnEdit.textContent = 'edit';
  btnEdit.addEventListener('click', handleEdit);

  btnDelete.textContent = 'x';
  btnDelete.addEventListener('click', handleDelete);

  li.appendChild(btnEdit);
  li.appendChild(btnDelete);
}


