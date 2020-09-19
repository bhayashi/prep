/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
const body = document.querySelector('body');
const form = document.createElement('div');
form.innerHTML = `
<form action="/api" method="post">
  <label for="item-input">Item: </label>
  <input id="item" type="text"></input>
  <label for="description-input">Description: </label>
  <input id="description" type="text"></input>
  <label for="date-input">Date: </label>
  <input id="date" type="text"></input>
  <label for="checkbox">Completed: </label>
  <input type="checkbox" id="completed" value="completed"></input>
  <button type="button" id="post-button">Post it!</button>
</form>
`;
body.appendChild(form);

const formItems = ['item', 'description', 'date', 'completed'];

const deleteFunc = (obj_id) => {
  fetch('/api', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: obj_id,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log('deleted', data))
    .catch((err) => console.log(err));
};

const getButton = document.createElement('button');
getButton.innerText = 'GET TODO LIST';
getButton.type = 'button';
body.appendChild(getButton);
getButton.addEventListener('click', () => {
  fetch('/api')
    .then((res) => res.json())
    .then((data) => {
      for (const obj of data) {
        const posts = document.createElement('div');
        for (const key in obj) {
          const innerP = document.createElement('p');
          innerP.innerText = obj[key];
          posts.appendChild(innerP);
        }
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete Me!';
        // deleteButton.addEventListener('click', deleteFunc(obj._id));
        posts.appendChild(deleteButton);
        body.appendChild(posts);
      }
      console.log(data);
    })
    .catch((err) => console.log(err));
});

const item = document.getElementById('item');
const description = document.getElementById('description');
const date = document.getElementById('date');

document.getElementById('post-button').addEventListener('click', () => {
  fetch('/api', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      item: item.value,
      description: description.value,
      date: date.value,
      status: 'completed',
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('Post from index.js', data);
    })
    .catch((err) => console.log('Error in Post from index.js', err));
});

/*
element.setAttribute
element.className
element.type
*/
