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

// const items = document.getElementsByClassName('collection-item')

// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems)

//Get elements by tag name document.getElementsByTagName()

// let lis = document.getElementsByTagName('li')
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// //convert HTML collection into an array

// lis = Array.from(lis);

// lis.reverse()
// lis.forEach(function(li) {
//     console.log(li.className)
//     li.textContent = `${index}: Hello`
// })

// console.log(lis)

//document.querySelectorAll

// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function(item, index) {
//     item.textContent = `${index}: Hello`
// })

// const liOdd = document.querySelectorAll('li:nth-child(odd)')
// const liEven = document.querySelectorAll('li:nth-child(even)')

// liOdd.forEach(function(li, index) {
//     li.style.background = '#ccc'
// })

// for(let i = 0; i < liEven.length; i++){
//     liEven[i].style.background = '#f4f4f4'
// }



// console.log(items)

//DOM traversal

// let val;

// const list = document.querySelector('ul.collection');

// const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;
// val = list;

// //Get child nodes

// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[3].nodeType;

// //1- Element
// //2- Attribute(DEP)
// //3- Text Node
// //8- Comment
// //9- Document itself
// //10- Doctype



// //Get children element nodes
// val = list.children;

// val = list.children[1];
// list.children[1].textContent='Hello';

// //children of children
// list.children[3].children[0].id ='test-link';
// val = list.children[3].children;

// val = list.firstChild;
// val = list.firstElementChild;

// val = list.lastChild;
// val = list.lastElementChild;

// //Count child elements
// val = list.childElementCount;

// //Get parent node
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// //Get next sibling
// val = listItem.nextSibling;
// val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// // //Get prev sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;


// console.log(val)

// //Create Element

// const li = document.createElement('li');

// //Add class
// li.className = 'collection-item';

// //add ID
// li.id = 'new-item';

// //add attribute
// li.setAttribute('title', 'New Item');

// //Create text node and append
// li.appendChild(document.createTextNode('HELLO WORLD'));

// //Create new link element
// const link = document.createElement('a');
// //Add classes
// link.className = 'delete-item secondary-content';
// //Add icon html
// link.innerHTML ='<i class="fa fa-remove"></i>';
// //Append Link
// li.appendChild(link);
// //append li as child to ul
// document.querySelector('ul.collection').appendChild(li);



// console.log(li);

//Replace element

//Create element
// const newHeading = document.createElement('h2');
// //Add ID
// newHeading.id = 'task-title';
// //New text node
// newHeading.appendChild(document.createTextNode('Task List'));

// //Get old heading
// const oldHeading = document.getElementById('task-title');
// //Parent
// const cardAction = document.querySelector('.card-action');

// //Replace
// cardAction.replaceChild(newHeading, oldHeading);
// // console.log(newHeading);

// //Remove element
// const lis  = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// //remove list item
// lis[0].remove();

// //remove child element
// list.removeChild(lis[2]);

// //Classes & attributes
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];

// let val;

// //classes
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');
// val = link;

// //attributes
// val = link.getAttribute('href')
// val = link.setAttribute('href', 'http://google.com');
// link.setAttribute('title', 'Google');
// val = link.hasAttribute('title');
// link.removeAttribute('title');
// val = link;


// console.log(val)

// document.querySelector('.clear-tasks').addEventListener('click', 
// function(e) {
// console.log('HELLO WORLD')
// e.preventDefault();
// });

// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e) {
//     let val;

//     val = e;

//     //event target element
//     val = e.target;
//     val = e.target.id;
//     val = e.target.className;
//     val = e.target.classList;

//     //event type
//     val = e.type;

//     //timestamp
//     val = e.timeStamp;

//     //coords event relative to the window
//     val = e.clientY;
//     val = e.clientX;

//     //coords event relative to the element
//     val = e.offsetY;
//     val = e.offsetX;

//     console.log(val)
// }

const clearBtn = document.querySelector('.clear-tasks')
const card = document.querySelector('.card')
const heading = document.querySelector('h5')

// clearBtn.addEventListener('click', runEvent);

// clearBtn.addEventListener('dblclick', runEvent)

// clearBtn.addEventListener('mousedown', runEvent)
// clearBtn.addEventListener('mouseup', runEvent)
// clearBtn.addEventListener('mouseenter', runEvent)
// clearBtn.addEventListener('mouseleave', runEvent)

// clearBtn.addEventListener('mouseover', runEvent)
// clearBtn.addEventListener('mouseout', runEvent)

card.addEventListener('mousemove', runEvent)
card.addEventListener('mouse', runEvent)



//event handler
function runEvent(e){
    console.log(`EVENT TYPE: ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`

    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY}, 40 )`;
}