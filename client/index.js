<<<<<<< HEAD
const body = document.querySelector('body');
const h3 = document.createElement('h3');
h3.innerText = 'Any type of string that we want';
body.appendChild(h3);
const ol = document.createElement('ol');
const li = document.createElement('li');
ol.innerHTML = '<li>this is the first item</li>';
li.innerHTML = 'this is a line item';
h3.appendChild(li);
h3.appendChild(ol);
=======
const maindiv = document.createElement('div');
//const h1 = document.createElement('h1');
maindiv.innerHTML = '<h1 id="header">Charlie</h1>';
//maindiv.append(h1);
maindiv.className = 'green';
const body = document.querySelector('body');
body.appendChild(maindiv);

const items = ['lilly', 'emmett', 'tabithachonkface'];
const list = document.createElement('ul');
for (let el of items) {
  const item = document.createElement('li');
  item.innerText = el;
  list.appendChild(item);
}
body.appendChild(list);

const get = document.createElement('button');
get.innerText = 'GET TODO LIST';
get.type = 'button';
get.addEventListener('click', () => {
  fetch(`/api`)
    .then((resp) => resp.json())
    .then((data) => {
      //const totalList = document.createElement('div');
      for (let el of data.rows) {
        const div = document.createElement('div');
        for (let key in el) {
          const innerP = document.createElement('p');
          innerP.innerText = el[key];
          div.appendChild(innerP);
        }
        body.appendChild(div);
      }
      // body.appendChild(totalList);
    })
    .catch((err) => console.log(err));
});
body.appendChild(get);
>>>>>>> 87208a12a795403631c950eb600c8e0f8e35bdfa
