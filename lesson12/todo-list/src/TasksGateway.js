const baseUrl =
  'https://crudcrud.com/api/e1faf976c6284da5a9a52ead7b7082a6/tasks';

export const createTask = (taskData) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  }).then((response) => {
    if (!response.ok) {
      throw new EvalError('Failed to create new task');
    }
  });
};

export const fetchTasksList = () => {
  return fetch(baseUrl)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((tasksList) => {
      return tasksList.map(({ _id, ...task }) => ({
        id: _id,
        ...task,
      }));
    });
};

export const updateTask = (taskId, taskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  }).then((response) => {
    if (!response.ok) {
      throw new EvalError('Failed to create new task');
    }
  });
};

export const deleteTask = (taskId) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  }).then((response) => {
    if (!response.ok) {
      throw new EvalError('Failed to delete task');
    }
  });
};
