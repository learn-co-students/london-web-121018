// get what we need form the page
const listEl = document.querySelector('#list')
const showPanelEl = document.querySelector('#show-panel')

const state = {
  books: [],
  currentUser: { id: 1, username: "nicolas" },
  selectedBook: null
}

// get books from the server
function getBooks () {
	return fetch('http://localhost:3000/books')
		.then(resp => resp.json())
}

// update book on server
function updateBook () {
  const book = state.selectedBook
  fetch(`http://localhost:3000/books/${book.id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book)
  })
}

// put a single book list item on the page
function renderBookItem (book) {
	const bookListItem = document.createElement('li')
	bookListItem.innerText = book.title
  listEl.appendChild(bookListItem)

  bookListItem.addEventListener('click', () => {
    state.selectedBook = book
    showBookInfo()
  })
}

// put multiple book list items on the page
function renderBookItems () {
  listEl.innerHTML = ''
  state.books.forEach(book => renderBookItem(book))
}

// render a book's info on the page
function showBookInfo () {
  const book = state.selectedBook
  const userLis = book.users.map(user => `<li>${user.username}</li>`).join('')

  showPanelEl.innerHTML = `
    <h3>${book.title}</h3>
    <img src='${book.img_url}' />
    <p>${book.description}</p>
    <ul>
      ${userLis}
    </ul>
    <button class='read-btn'>${userHasntReadBook() ? 'Read' : 'Unread'} book</button>
  `
  const readBtn = showPanelEl.querySelector('.read-btn')
  readBtn.addEventListener('click', () => {
    if (userHasntReadBook()) {
      readBook()
    } else {
      unreadBook()
    }
    updateBook()
    showBookInfo()
  })
}

function readBook () {
  state.selectedBook.users.push(state.currentUser)
}

function unreadBook () {
  const filteredUsers = state.selectedBook.users.filter(user => user.id !== state.currentUser.id)
  state.selectedBook.users = filteredUsers
}

function userHasntReadBook () {
  return state.selectedBook.users.find(user => user.id === state.currentUser.id) === undefined
}

function initialize () {
  getBooks()
    .then(books => {
      state.books = books
      renderBookItems()
    })
}


initialize()
