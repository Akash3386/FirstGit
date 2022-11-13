var form = document.getElementById('addForm');
var itemlist = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit',addItem);

// delete event 
itemlist.addEventListener('click',removeItem);

// to filter
filter.addEventListener('keyup',filterItems);


//// To add new input ..........
var add = document.getElementById('addForm');

var input = document.createElement('input');
input.className = 'form-control mr-3';
input.type = 'text';
input.id = 'item';
input.appendChild(document.createTextNode('jhbj'));
add.insertBefore(input,add[1]);
////.............


function addItem(e){
    e.preventDefault();

    // get input value
    var newItem = document.getElementById('item').value;
    
    // create new li element
    var li = document.createElement('li');
    li.className = 'list-group-item';
    
    // add text with input value
    for(var i =0;i<item.length;i++){
    li.appendChild(document.createTextNode(item[i].value));

}

    //create delete button element
    var deleteBtn = document.createElement('button');
    var editBtn = document.createElement('button');

    // add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    editBtn.className = 'btn btn-sm float-right';

    deleteBtn.tagName = 'li';
    editBtn.tagName = 'li';

    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    editBtn.appendChild(document.createTextNode('edit'));

    // append btn to li
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);



    itemlist.appendChild(li);

}

function removeItem(e){
    if (e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}



var itemlist = document.getElementById('items');
filter.addEventListener('keyup',filterItems);

// console.log(e.value);
function filterItems(e){
    // convert text to lower case
    var text = e.target.value.toLowerCase();
    // console.log(e.target.value);
    
    // get li
    var items = itemlist.getElementsByTagName('li');
    console.log(items);
     
    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text)!= -1){
            item.style.display = 'block';
        }else {
            item.style.display = 'none';
        }
    });
}