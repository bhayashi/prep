const body = document.querySelector('body');
const div = document.createElement('div');
// h3.appendChild(document.createElement(<span></span>));
div.innerHTML = 'Any type of string that we want';
body.appendChild(div);
const ol = document.createElement('ol');
const li = document.createElement('li');
li.innerText = 'no I am the line item';
ol.appendChild(li);

// li.innerHTML = 'this is line item';
// div.appendChild(li);
div.appendChild(ol);
