/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
// const inputForm = document.getElementById('input-form');
//
// ;
// maindiv.append(h1);
// ;
// body.appendChild(inputForm);
const title = document.querySelector('#input-form');
const h1 = document.createElement('h1');
h1.innerHTML = '<h1 id="header">Charlie</h1>';
title.className = 'green';
title.appendChild(h1);

window.addEventListener('load', () => getAllItems());

const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click', () => {
  const message = input.value;
  // console.log(message);
  const postObj = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item: 'Another item',
      description: message,
      date: 'tomorrow',
      status: 'incomplete',
    }),
  };
  fetch('/api', postObj)
    .then((resp) => resp.json())
    .then((data) => console.log(data))
    .then(() => getAllItems())
    .catch((err) => console.log(err));
});

// const items = ['lilly', 'emmett', 'tabithachonkface'];
// const list = document.createElement('ul');
// for (let el of items) {
//   const item = document.createElement('li');
//   item.innerText = el;
//   list.appendChild(item);
// }
// body.appendChild(list);

const todoList = document.getElementById('todo-list');
const get = document.createElement('button');
get.innerText = 'GET TODO LIST';
get.type = 'button';
get.addEventListener('click', () => {
  getAllItems;
});
todoList.appendChild(get);

function getAllItems() {
  fetch('/api')
    .then((resp) => resp.json())
    .then((data) => {
      // const totalList = document.createElement('div');
      todoList.innerHTML = '';
      for (const el of data.rows) {
        const div = document.createElement('div');
        for (const key in el) {
          const innerP = document.createElement('p');
          innerP.innerText = el[key];
          div.appendChild(innerP);
        }
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete Me!';
        deleteButton.addEventListener('click', (event) => deleteItem(el._id));
        div.appendChild(deleteButton);
        todoList.appendChild(div);
      }
      // body.appendChild(totalList);
    })
    .catch((err) => console.log(err));
}

function deleteItem(item) {
  const deleteObj = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ _id: item }),
  };
  fetch('/api', deleteObj)
    .then((data) => data.json())
    .then((stuff) => {
      console.log(stuff);
    })
    .then(() => getAllItems())
    .catch((err) => {
      console.log(err);
    });
}

// const postObj = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//     item: 'Another item',
//     description: message,
//     date: 'tomorrow',
//     status: 'incomplete',
//   }),
// };
// fetch('/api', postObj)
//   .then((resp) => resp.json())
//   .then((data) => console.log(data))
//   .then(() => getAllItems())
//   .catch((err) => console.log(err));
