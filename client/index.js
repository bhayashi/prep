const { get } = require("../server/routes");

const body = document.querySelector('body');
const form = document.createElement('div');
form.innerHTML = `
<form action="/api" method="post">
  <label for="item-input">Item: </label>
  <input type="text"></input>
  <label for="description-input">Description: </label>
  <input type="text"></input>
  <label for="date-input">Date: </label>
  <input type="text"></input>
  <label for="checkbox">Completed: </label>
  <input type="checkbox" id="completed-check" value="completed"></input>
  <button type="button" id="post-button">Post it!</button>
</form>
`;
body.appendChild(form);

const formItems = ['item', 'description', 'date', 'completed'];

const getButton = document.createElement('button');
getButton.innerText = 'GET TODO LIST';
getButton.type = 'button';
getButton.addEventListener('click', () => {
  fetch('/api')
    .then((res))
});

document.getElementById('post-button').onclick = () => {
  fetch('/api', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      //
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log('Post from index.js', data))
    .catch((err) => console.log('Error in Post from index.js', err));
};

/*
element.setAttribute
element.className
element.type
*/
