document.addEventListener('DOMContentLoaded', () => {
  const inputEl = document.getElementById('task-input');
  const addBtn = document.getElementById('add-btn');
  const taskListEl = document.getElementById('task-list');

  // Add new task when Add button is clicked
  addBtn.addEventListener('click', () => {
    const taskText = inputEl.value.trim();
    if (taskText !== '') {
      addTask(taskText);
      inputEl.value = '';
      inputEl.focus();
    }
  });

  // Also allow adding by pressing Enter key
  inputEl.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addBtn.click();
    }
  });

  function addTask(text) {
    // Create elements
    const li = document.createElement('li');
    li.className = 'task-item';

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = text;

    // Toggle completed status when clicking the task text
    span.addEventListener('click', () => {
      span.classList.toggle('completed');
    });

    const delBtn = document.createElement('button');
    delBtn.className = 'delete-btn';
    delBtn.textContent = 'Delete';

    delBtn.addEventListener('click', () => {
      taskListEl.removeChild(li);
    });

    // Build up the list item
    li.appendChild(span);
    li.appendChild(delBtn);

    taskListEl.appendChild(li);
  }
});
