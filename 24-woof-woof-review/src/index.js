// get what you need from the page
const filterBtn = document.querySelector('#good-dog-filter')
const dogBarEl = document.querySelector('#dog-bar')
const dogInfoEl = document.querySelector('#dog-info')

// we use state to keep track of any piece of data our app will need to function
const state = {
  dogs: [],
  filter: false,
  selectedDog: null
}

// add a single dog tag to the dobBar
function addDogTag (dog) {
  const dogTag = document.createElement('span')
  dogTag.className = "dog-tag"
  dogTag.dataset.id = dog.id
	dogTag.innerText = dog.name
	dogBarEl.append(dogTag)
}

// add mutliple dog tags
function addDogTags (dogs) {
	dogBarEl.innerHTML = ''
	dogs.forEach(dog => addDogTag(dog))
}

// show a dog's info on the page
function showDogInfo (dog) {
	dogInfoEl.innerHTML = `
		<img src="${dog.image}">
 		<h2>${dog.name}</h2>
 		<button class='toggle-btn' data-id="${dog.id}">${dog.isGoodDog ?  "Good" : "Bad" } Dog!</button>
  `
}

// start listening to dog tag clicks
function addDogTagsListener () {
  document.addEventListener('click', event => {
    if (event.target.className === 'dog-tag') {
      const id = parseInt(event.target.dataset.id)
      const foundDog = state.dogs.find(dog => dog.id === id)
      showDogInfo(foundDog)
      state.selectedDog = foundDog
    }
  })
}

// update the filter button
function updateFilter () {
  filterBtn.innerText = state.filter ? "Filter good dogs: ON" : "Filter good dogs: OFF"
}

// add a listener with the filter functionality
function addFilterListener () {
  filterBtn.addEventListener('click', () => {
    state.filter = !state.filter
    updateFilter()
    updateDogBar()
  })
}

// use addDogTags to render either all of the dogs, or just the good ones
// depending on the status of state.filter
function updateDogBar () {
  if (state.filter) {
    const goodDogs = state.dogs.filter(dog => dog.isGoodDog)
    addDogTags(goodDogs)
  } else {
    addDogTags(state.dogs)
  }
}

// global listener for the good dog toggle button
function addToggleGoodDogListener () {
  document.addEventListener('click', event => {
    if (event.target.className === 'toggle-btn') {
      toggleGoodDog()
      updateDog(state.selectedDog)
      updateDogBar()
    }
  })
}

// toggle the currently selected dog's isGoodDog state and refresh it on the page
function toggleGoodDog () {
  state.selectedDog.isGoodDog = !state.selectedDog.isGoodDog
  showDogInfo(state.selectedDog)
}

// run all of this stuff when the application loads
function initialize () {
  getDogs()
    .then(dogs => {
      state.dogs = dogs
      addDogTags(state.dogs)
    })
  addDogTagsListener()
  addFilterListener()
  addToggleGoodDogListener()
}


// server stuff
function getDogs () {
  return fetch('http://localhost:3000/pups')
    .then(resp => resp.json())
}

function updateDog (dog) {
  return fetch(`http://localhost:3000/pups/${dog.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dog)
  }).then(resp => resp.json())
}

initialize()
