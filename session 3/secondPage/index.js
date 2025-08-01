function addTask() {
      const taskInput = document.getElementById('taskInput');
      const taskText = taskInput.value.trim();

      if (taskText === "") return;

      const li = document.createElement('li');

      const span = document.createElement('span');
      span.innerText = taskText;

      const actions = document.createElement('div');
      actions.classList.add('actions');

      const doneBtn = document.createElement('button');
      doneBtn.innerHTML = "✔";
      doneBtn.classList.add('done-btn');
      doneBtn.onclick = () => {
        span.classList.toggle('done');
      };

      const deleteBtn = document.createElement('button');
      deleteBtn.innerHTML = "x";
      deleteBtn.classList.add('delete-btn');
      deleteBtn.onclick = () => {
        li.remove();
      };

      actions.appendChild(doneBtn);
      actions.appendChild(deleteBtn);

      li.appendChild(span);
      li.appendChild(actions);

      document.getElementById('taskList').appendChild(li);
      taskInput.value = "";
    }