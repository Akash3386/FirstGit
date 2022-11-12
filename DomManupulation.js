// EXAMINE THE DOCUMENT OBJECT

// console.log(document.domain);
// console.log(document.url);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello'
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

//......there are deifferent selecters....//
// 1) GetElementById //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle.textContent);
// headerTitle.textContent='Hello';
// headerTitle.innertext = 'Goodbye';
// headerTitle.style.borderBottom = ' solid 3px #000';
// var title = document.getElementsByClassName('title');
// console.log(title[0].textContent);
// title[0].style.fontWeight = 'bold';
// title[0].style.color = 'green';



// 2) getElementByClassName  //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items[1]);
// items[1].textContent = 'Hello';
// items[1].style.fontWeight = 'bold';
// items[1].style.color = 'yellow';

// error
// items.style.backgroundColor = '#f4f4f4';  // it doesnt work bcz its a list of item so we iterate over it using loop//

// for(var i =0; i < items.length; i++){
//     items[i].style.fontWeight = 'bold';
//     if (i===2){
//         items[i].style.backgroundColor = 'green';  
//     }
//     else{
//     items[i].style.backgroundColor = '#f4f4f4';
//     }
// }

// 3) getElementByTagName//
// var li = document.getElementsByTagName('li');
// console.log(items[li]);
// li[1].textContent = 'Hello 2';
// li[4].style.fontWeight = 'bold';

// var newclass = document.getElementsByClassName('new-class-name');
// console.log(newclass[0]);
// newclass[0].style.color = 'red';
// for(var i =0; i < li.length; i++){
//     li[i].style.fontWeight = 'bold';
//     if (i===2){
//         li[i].style.backgroundColor = 'green';  
//     }
//     else{
//     li[i].style.backgroundColor = '#f4f4f4';
//     }
// }

// 4)querySelector //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hellow world';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// var items = document.querySelector('.list-group-item');
// items.style.color = 'red';

// // items.lastElementChild.style.color = 'yellow';

// var seconditem = document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.backgroundColor = 'green';

// var thirditem = document.querySelector('.list-group-item:nth-child(3)');
// console.log(thirditem);
// thirditem.style.color = '#0000';

// // 5) querySelectorAll //
// var title = document.querySelectorAll('.title');
// console.log(title);
// title[0].textContent = 'Hello';

// var item = document.querySelectorAll('li:nth-child(2)');
// console.log(item);
// item[0].style.color = 'red';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// // var even = document.querySelectorAll('li:nth-child(even)');

// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor = 'green';
//     // even[i].style.backgroundColor = '#ccc';
// }


// Traversing the dom
var itemlist = document.querySelector('#items');
ParentNode
console.log(itemlist.parentNode);
itemlist.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemlist.parentNode.parentNode);
console.log(itemlist.parentNode.parentNode.parentNode);

parentElent
console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemlist.parentElement.parentElement);
console.log(itemlist.parentElement.parentElement.parentElement);

childNode
console.log(itemlist.childNodes);

console.log(itemlist.children);
console.log(itemlist.children[1]);
itemlist.children[1].style.backgroundColor = 'red';


//firstchild
console.log(itemlist.firstChild);

//firstElementChild
console.log(itemlist.firstElementChild);
itemlist.firstElementChild.textContent = 'Hello 1';

//lastChild
console.log(itemlist.lastChild);

//lastElementChild
console.log(itemlist.lastElementChild);

//nextSibling
console.log(itemlist.nextSibling);
console.log(itemlist.nextElementSibling);

//previousSibling
console.log(itemlist.previousSibling); 
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.backgroundColor = 'yellow';

//createElement
var newDiv = document.createElement('div');

//Add class
newDiv.className = 'hello';

//Add id
newDiv.id = 'hello1';

//Add attribute
newDiv.setAttribute('title', 'Hello div');

//create textNode
var newDivText = document.createTextNode('Hello world');

// add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
// console.log(container);
var h1 = document.querySelector('header h1');

// newDiv.style.fontSize = '30px';
// console.log(newDiv);

var parentnode = document.getElementById('items');
parentnode.innerHTML = '<l1>Hello world</l1>' + parentnode.innerHTML;

// console.log(listGroup.insertBefore(newDiv,item1));
container.insertBefore(newDiv,h1);




