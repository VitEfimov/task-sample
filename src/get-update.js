export const getUpdate = async (taskId) => {
  const response = await fetch(`http://localhost:3000/tasks/${taskId}`);
  return response.json();
};

export const loadTasksFromLocalStorage = () => {
    const defaultTask = [{
        "id": "1712284250904",
        "taskname": "Add first task...",
        "creationDate": new Date().toLocaleDateString(),
        "lastUpdatedDate": null,
        "completionDate": new Date().toLocaleDateString(),
        "priority": "High",
        "completed": false,
        "description": {
          "text": "",
          "img": "",
          "url": ""
        }
      }];
    let savedData = JSON.parse(localStorage.getItem('tasks'))
    //  || defaultTask;
    if (!Array.isArray(savedData)) {
        // If savedData is an object, wrap it inside an array
        savedData = savedData ? [savedData] : defaultTask;
    } else if (!savedData) {
        // If savedData is null or undefined, use the default task array
        savedData = defaultTask;
    }
    // if (!localStorage.getItem('tasks')) {
    //     localStorage.setItem('tasks', JSON.stringify(defaultTask));
    // }
    return savedData;
};

export const updateTask = (taskId, name, priority, completed, description, completionDate) => {
    const tasks = loadTasksFromLocalStorage();
    const task = tasks.find(task => task.id === taskId);
    if (task) {
        task.taskname = name || task.taskname;
        task.priority = priority || task.priority;
        task.completed = completed;
        task.completionDate = completionDate || task.completionDate;
        if (description) {
            task.description = {
                text: description.text || '',
                img: description.img || '',
                url: description.url || '',
            };
        }
        task.lastUpdatedDate = new Date().toLocaleDateString();
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
};

// export const addTask =() =>{
//     const { task } = action.payload;
//     state.tasks.push(task);
//     localStorage.setItem('tasks', JSON.stringify(newTask));
// }


