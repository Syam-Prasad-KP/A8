const tasks = []
let editingIndex = null

const displayTask = () => {
    const taskContainer = document.getElementById("taskContainer")
    const message = document.getElementById("message")
    if (tasks.length === 0) {
        message.classList.remove("d-none")
    } else {
        message.classList.add("d-none")
    }
    taskContainer.innerHTML = ""
    for (let index = 0; index < tasks.length; index++) {
        if (editingIndex === index) {
            taskContainer.innerHTML += `
            <div class="input-group mb-2" role="alert">
                <input type="text" class="form-control" id="editInput" value="${tasks[index]}">
                <button class="btn btn-primary btn-sm" onclick="saveTask(${index})">Save</button>
            </div>`
        } else {
            taskContainer.innerHTML += `
            <div class="alert alert-light d-flex justify-content-between mb-2 align-items-center" role="alert">
                <span>${tasks[index]}</span>
                <div>
                    <button class="btn btn-primary btn-sm me-1" onclick="editTask(${index})">Edit</button>
                    <button class="btn btn-danger btn-sm" onclick="deleteTask(${index})">Delete</button>
                </div>
            </div>`
        }
    }
}

const addTask = () => {
    const taskInput = document.getElementById("taskInput")
    const inputValue = taskInput.value.trim()
    if (inputValue.length === 0) {
        alert("Task input should not be blank")
        return
    }
    tasks.push(inputValue)
    taskInput.value = ""
    displayTask()
}

const deleteTask = (index) => {
    tasks.splice(index, 1)
    displayTask()
}

const editTask = (index) => {
    editingIndex = index
    displayTask()
    document.getElementById("editInput").focus()
}

const saveTask = (index) => {
    const editInput = document.getElementById("editInput")
    const newValue = editInput.value.trim()
    if (newValue.length === 0) {
        alert("Task should not be blank")
        return
    }
    tasks[index] = newValue
    editingIndex = null
    displayTask()
}

displayTask()