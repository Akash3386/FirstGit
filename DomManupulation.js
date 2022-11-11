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
var li = document.getElementsByTagName('li');
console.log(items[li]);
li[1].textContent = 'Hello 2';
li[4].style.fontWeight = 'bold';

var newclass = document.getElementsByClassName('new-class-name');
console.log(newclass[0]);
newclass[0].style.color = 'red';
// for(var i =0; i < li.length; i++){
//     li[i].style.fontWeight = 'bold';
//     if (i===2){
//         li[i].style.backgroundColor = 'green';  
//     }
//     else{
//     li[i].style.backgroundColor = '#f4f4f4';
//     }
// }


