// get everything I need that's already on the page
const inputEl = document.querySelector('#new-task-description')
const formEl = document.querySelector('#create-task-form')
const listEl = document.querySelector('#tasks')

// add a single task on the page
const addTask = text => {
	const taskEl = document.createElement('li')
	taskEl.innerText = text
	listEl.appendChild(taskEl)
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
		formEl.reset()
	}
})

// event delegation
document.addEventListener('click' , event => {
	if (event.target.className === 'target-button') {
		console.log('yay!')
	}
})

// event bubbling
const parentEl = document.querySelector('#parent')
const childEl = document.querySelector('#child')
const grandChildEl = document.querySelector('#grandchild')

parentEl.addEventListener('click', () => {
  console.log("I'm the parent!")
})

childEl.addEventListener('click', () => {
  console.log("I'm the child!")
})

grandChildEl.addEventListener('DOMContentLoaded', (event) => {
  event.stopPropagation()
  console.log("I'm the grandchild!")

  const stuff = "Nicolas"
})
