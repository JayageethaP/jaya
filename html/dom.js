// 1. Make the 3rd element in the list have green background color
//var items = document.getElementsByClassName('list-group-item');
//console.log(items);

//console.log(items[2]);
//items[2].textContent='Hello';
//items[2].style.backgroundColor = 'green';

// 2. Make all the elements in the list have bold color font
//for (var i = 0; i < items.length; i++) {
//  items[i].style.fontWeight = 'bold';
//}

//var newItem = document.createElement('li');
//newItem.textContent = 'Sharp';
//document.getElementById('items').appendChild(newItem);

//items[1].style.backgroundColor = 'green';

//items[2].style.display = 'none';


//var secondItem = document.querySelectorAll('#items li:nth-of-type(2)');
//secondItem[0].style.color = 'green';
//var oddItems = document.querySelectorAll('#items li:nth-of-type(odd)');
//for (var i = 0; i < oddItems.length; i++) {
 // oddItems[i].style.backgroundColor = 'green';
//}

//var itemList=document.querySelector('#items');
// parent node
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor='orange';
//console.log(itemList.parentElement.parentElement);

//console.log(itemList.childNodes);

//console.log(itemList.children);
//console.log(itemList.children[1]);
//itemList.children[1].style.backgroundColor='yellow';
//first child
//console.log(itemList.firstChild);
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent='Hello1';
//console.log(itemList.lastChild);
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent='WELLCOME';
//console.log(itemList.nextSibling);
//next element sibling
//console.log(itemList.nextElementSibling);
//console.log(itemList.previousSibling);
//previous sibling
//.log(itemList.previousElementSibling);
//itemList.previousElementSibling.style.color='green';

var newDiv= document.createElement('div');

newDiv.className='hello';
newDiv.id='hello1';
newDiv.setAttribute('title','Hello Div');

var newDivText=document.createTextNode('Hello World');
newDiv.appendChild(newDivText);

var container = document.querySelector('header  .container');
var h1= document.querySelector('header h1');

container.insertBefore(newDiv,h1);
newDiv.style.fontSize='30px';

var newListItem = document.createElement('li');
  var newListItemText = document.createTextNode('Hello World');
  newListItem.appendChild(newListItemText);

  var itemsList = document.getElementById('items');
  var firstItem = itemsList.firstChild;
  itemsList.insertBefore(newListItem, firstItem);
  
console.log(newDiv);
