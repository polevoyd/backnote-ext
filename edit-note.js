"use strict";

document.title = 'Backnote';

// find ul on a page
var ulEl = document.getElementById('notesUl');


// show size of local storage
var entriesSize = localStorage.length-1;

// running through each entry
for (var i=0 ; i < entriesSize; i++)
{
  // for each entry creating a temporary key
  var tmpKey = 'backnote' + i;
  // and recieving a temporary data
  var tmpData = localStorage.getItem(tmpKey);

  // creating a list element and attaching it data to it
  var liEl = document.createElement('li');
  var text = document.createTextNode(tmpData);
  liEl.appendChild(text);
  ulEl.appendChild(liEl);
}
    
