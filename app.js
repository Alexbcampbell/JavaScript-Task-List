// let val;

// val = document;
// val = document.all[8];

// val = document.all.length;
// val = document.body;
// val = document.doctype;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// //select without selectors
// val = document.forms;
// val = document.forms[1];
// val = document.forms[0].id;
// val = document.forms[0].method;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// //

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(script) {
//     console.log(script)
// })


// console.log(val);

//document.getElementById()

// console.log(document.getElementById('task-title'))

// //Get things from the element 
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// //Change Styling
// document.getElementById('task-title').style.background = '#333';
// document.getElementById('task-title').style.background = '#fff';
// document.getElementById('task-title').style.padding = '5px';
// // document.getElementById('task-title').style.display = 'none';

// taskTitle.textContent = 'Task List';
// document.getElementById('task-title').innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>'

//document.querySelector()

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5')); // if more than one H5, it will get the 1st one

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';

// document.querySelector('li:nth-child(3)').textContent = 'Hello';

//get element by className

const items = document.getElementsByClassName('collection-item')

console.log(items);
console.log(items[0]);
items[0].style.color = 'red';
items[3].textContent = 'Hello';

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

console.log(listItems)