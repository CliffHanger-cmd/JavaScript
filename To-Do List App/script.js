const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // Add a new task to the list
    function addTask(text) {
      // Create elements
      const li = document.createElement('li');
      const span = document.createElement('span');
      span.textContent = text;
      span.classList.add('task-text');

      const actions = document.createElement('div');
      actions.classList.add('task-actions');

      const completeBtn = document.createElement('button');
      completeBtn.innerHTML = '✓';
      completeBtn.title = 'Mark as complete';
      completeBtn.classList.add('task-btn', 'complete-btn');

      const removeBtn = document.createElement('button');
      removeBtn.innerHTML = '🗑';
      removeBtn.title = 'Remove task';
      removeBtn.classList.add('task-btn', 'remove-btn');

      // Append
      actions.append(completeBtn, removeBtn);
      li.append(span, actions);
      taskList.appendChild(li);

      // Event listeners
      completeBtn.addEventListener('click', () => {
        li.classList.toggle('completed');
      });
      removeBtn.addEventListener('click', () => {
        li.remove();
      });
    }

    // Handle add button click
    addTaskBtn.addEventListener('click', () => {
      const text = taskInput.value.trim();
      if (text) {
        addTask(text);
        taskInput.value = '';
        taskInput.focus();
      }
    });

    // Handle Enter key
    taskInput.addEventListener('keypress', e => {
      if (e.key === 'Enter') {
        addTaskBtn.click();
      }
    });