// 1. Make the 3rd element in the list have green background color
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[2]);
items[2].textContent='Hello';
items[2].style.backgroundColor = 'green';

// 2. Make all the elements in the list have bold color font
for (var i = 0; i < items.length; i++) {
  items[i].style.fontWeight = 'bold';
}

var newItem = document.createElement('li');
newItem.textContent = 'Sharp';
document.getElementById('items').appendChild(newItem);



