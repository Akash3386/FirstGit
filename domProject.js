var form = document.getElementById('addForm');
var itemlist = document.getElementById('items');

// Form submit event
form.addEventListener('submit',addItem);

// delete event 
itemlist.addEventListener('click',removeItem)

function addItem(e){
    e.preventDefault();

    // get input value
    var newItem = document.getElementById('item').value;

    // create new li element
    var li = document.createElement('li');
    li.className = 'list-group-item';
    
    // add text with input value
    li.appendChild(document.createTextNode(newItem));

    //create delete button element
    var deleteBtn = document.createElement('button');
    var editBtn = document.createElement('button');

    // add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    editBtn.className = 'btn btn-danger btn-sm float-right';

    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    editBtn.appendChild(document.createTextNode('edit'));

    // appent btn to li
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