const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false

const formEl = document.querySelector('.add-toy-form')
const toyCollection = document.querySelector('#toy-collection')

// get all toys from the server
function getToys () {
	return fetch('http://localhost:3000/toys')
		.then(resp => resp.json())
}

// create a toy on the server
function createToy (toy) {
	return fetch('http://localhost:3000/toys', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(toy)
	}).then(resp => resp.json())
}

// update toy on server
function updateToy (toy) {
  return fetch(`http://localhost:3000/toys/${toy.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(toy)
  }).then(resp => resp.json())
}


// render a single toy on the page
function renderToy (toy) {
	const toyEl = document.createElement('div')
	toyEl.className = "card"

	toyEl.innerHTML = `
		<h2>${toy.name}</h2>
    <img src='${toy.image}' class="toy-avatar" />
    <p class='likes'>${toy.likes} Likes</p>
    <button class="like-btn">Like <3</button>
	`
  const likeBtn = toyEl.querySelector('.like-btn')
  const likesEl = toyEl.querySelector('.likes')

  likeBtn.addEventListener('click', () => {
    toy.likes++
    likesEl.innerText = `${toy.likes} Likes`
    updateToy(toy)
  })

	toyCollection.appendChild(toyEl)
}

// render multiple toys
function renderToys (toys) {
  toyCollection.innerHTML = ''
  toys.forEach(toy => renderToy(toy))
}

// listen to form submission
function addNewToyFormListener () {
  formEl.addEventListener('submit', event => {
    event.preventDefault()

    const toy = {
      name: formEl.name.value,
      image: formEl.image.value,
      likes: 0
    }

    createToy(toy)
      .then(serverToy => renderToy(serverToy))
      .catch(error => alert('Unable to create toy. Plase try again later.'))
    
    formEl.reset()
  })
}


addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    // submit listener here
  } else {
    toyForm.style.display = 'none'
  }
})


function initialize () {
  getToys()
    .then(toys => renderToys(toys))
  addNewToyFormListener()
}

initialize()

// OR HERE!
