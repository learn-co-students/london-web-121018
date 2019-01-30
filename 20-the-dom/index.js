console.log('Hello from index.js!')

// const name = 'Nicolas'

// const greet = () => console.log(`Hello, ${name}!`)

// // debugger

// greet()


// full JS approach:
const btn1 = document.createElement('button')
const btn2 = document.createElement('button')
const btn3 = document.createElement('button')

btn1.id = 'delete-btn'
btn2.id = 'add-btn'
btn3.id = 'edit-btn'

btn1.className = 'btn'
btn2.className = 'btn'
btn3.className = 'btn'

btn1.innerText = 'DELETE'
btn2.innerText = 'ADD'
btn3.innerText = 'EDIT'

document.body.append(btn1, btn2, btn3)

// full innerHTML approach:
document.body.innerHTML += `
  <div>
    <button id="delete-btn" class="btn">DELETE</button>
    <button id="add-btn" class="btn">ADD</button>
    <button id="edit-btn" class="btn">EDIT</button>
  <div>
`

// hybrid approach:
const divEl = document.createElement('div')
divEl.innerHTML = `
  <button id="delete-btn" class="btn">DELETE</button>
  <button id="add-btn" class="btn">ADD</button>
  <button id="edit-btn" class="btn">EDIT</button>
`
document.body.append(divEl)

divEl.querySelector('#delete-btn')
