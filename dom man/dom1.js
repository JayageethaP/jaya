var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
// Select all list items
var items = document.querySelectorAll('#items li');

// Loop through each list item
items.forEach(function(item) {
  // Create edit button element
  var editBtn = document.createElement('button');
  
  // Add classes to edit button
  editBtn.className = 'btn btn-primary btn-sm float-right edit';
  
  // Append text node
  editBtn.appendChild(document.createTextNode('Edit'));
  
  // Append button to li
  item.appendChild(editBtn);
});


// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input values
  var newItem = document.getElementById('item').value;
  var newDescription = document.getElementById('description').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  
  // Create and append item name and description elements
  var itemName = document.createElement('h5');
  itemName.appendChild(document.createTextNode(newItem));
  li.appendChild(itemName);

  var itemDescription = document.createElement('p');
  itemDescription.appendChild(document.createTextNode(newDescription));
  li.appendChild(itemDescription);

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

itemList.appendChild(li);
}


// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent.toLowerCase();
    var itemDescription = item.firstChild.nextSibling.textContent.toLowerCase();
    if(itemName.indexOf(text) != -1 || itemDescription.indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

