let val;

val = document;
val = document.all[8];

val = document.all.length;
val = document.body;
val = document.doctype;
val = document.URL;
val = document.characterSet;
val = document.contentType;

//select without selectors
val = document.forms;
val = document.forms[1];
val = document.forms[0].id;
val = document.forms[0].method;

val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute('src');

//

let scripts = document.scripts;

let scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script) {
    console.log(script)
})


console.log(val);