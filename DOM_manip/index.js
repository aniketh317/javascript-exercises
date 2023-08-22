const container = document.querySelector('#container');

cu = document.createElement('p');
cu.textContent = "Hey I'm red";
cu.style.color = 'red';
container.appendChild(cu);

cu = document.createElement('h3');
cu.textContent = "I'm a blue h3!";
cu.style.color = 'blue';
container.appendChild(cu);

cu = document.createElement('div');
cu.style.cssText = "background-color:pink; border-color:black"
cuu = document.createElement("h1");
cuu.textContent = "I'm in a div";
cu.appendChild(cuu);
cuu = document.createElement("p");
cuu.textContent = "ME TOO!";
cu.appendChild(cuu);
container.appendChild(cu);