// get everything I need that's already on the page
const inputEl = document.querySelector('#new-task-description')
const formEl = document.querySelector('#create-task-form')
const listEl = document.querySelector('#tasks')

const state = {
	tasks: []
}

// add multiple tasks on the page
const addTasks = tasks => {
	for (const task of tasks) {
		state.tasks.push(new Task(task))
	}
}

// listen for form submission
// when a user clicks a button (or presses enter on the input):
// get the value of the input
// give that to addtask
formEl.addEventListener('submit', (event) => {
	event.preventDefault()
	const text = inputEl.value
	if (text.length > 2) {
		addTask(text)
		createTask(text)
		formEl.reset()
	}
})

// Server stuff

// get tasks from the server
// this returns a Promise with an array of tasks
const getTasks = () => {
	return fetch('http://localhost:3000/tasks')
		.then(resp => resp.json())
}

// create a new task on the server
const createTask = text => {
	return fetch('http://localhost:3000/tasks', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ text: text, completed: false })
	}).then(resp => resp.json())
}

// delete a task from the server
const deleteTask = id => {
	return fetch(`http://localhost:3000/tasks/${id}`, {
		method: 'DELETE',
	}).then(resp => resp.json())
}

getTasks()
	.then(tasks => addTasks(tasks))
