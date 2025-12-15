// DOM MANIPULATION

// const title = document.querySelector('#main-heading');

// title.style.color = 'red'

// const listItems = document.querySelectorAll('.list-items');

// for (i = 0; i < listItems.length ; i++){
//     listItems[i].style.color = 'red'
// }

// console.log(listItems);

// Creating Element
const ul = document.querySelector('ul');
const li = document.createElement('li');

// Adding Element

ul.append(li);

// Modifying the text

li.innerText = 'X-men';

// Modifying Attributes & Classes  

// li.setAttribute('id', 'main-heading');
// li.removeAttribute('id');

// const title = document.querySelector('#main-heading');

// console.log(title.getAttribute('id'))

li.classList.add('list-items')

console.log(li.classList.contains('list-items'))

li.remove()