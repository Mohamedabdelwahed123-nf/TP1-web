document.getElementById('todoForm').addEventListener('submit', function(event) {
  event.preventDefault();
  addTask();
});

function addTask() {
  const name = document.getElementById('InputName').value;
  const content = document.getElementById('InputContent').value;

  if (name && content) {
    const taskElement = document.createElement('div');
    taskElement.className = 'list-group-item d-flex justify-content-between align-items-center ';
    taskElement.innerHTML = `
      <div>
        <h5 class="mb-1">${name}</h5>
        <p class="mb-1">${content}</p>
      </div>
      <button type="button" class="btn  btn-sm" onclick="deleteTask(this)">🗑️</button>
      
    `;

    document.getElementById('tasksContainer').appendChild(taskElement);
    document.getElementById('todoForm').reset();
  }
}

function deleteTask(button) {
  button.parentElement.remove();
}