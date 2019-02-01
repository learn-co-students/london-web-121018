class Task {
	constructor (task) {
    this.text = task.text
    this.completed = task.completed
		this.listEl = document.querySelector('#tasks')
		this.render()
	}

	render () {
		if (!this.taskEl) {
			const taskEl = document.createElement('li')
			taskEl.innerText = this.text
			this.taskEl = taskEl
		}
		this.listEl.appendChild(this.taskEl)
	}

	remove () {
		this.taskEl.remove()
	}

	edit (newText) {
		this.text = newText
		this.taskEl.innerText = newText
	}
}
