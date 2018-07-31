"use strict";

document.title = 'Backnote';
// find ul on a page
var ulEl = document.getElementById('notesUl');





function renderData()
{

  

  // show size of local storage
  var entriesSize = localStorage.length;

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

}
    
function clearData()
{   
  // clear storage
  localStorage.clear();

  clearElementsOnPage();

}





function clearElementsOnPage()
{
  while (ulEl.hasChildNodes())
  {
    ulEl.removeChild();
  }
  // reload last tab
  // browser.tabs.reload();
}









// add a listener to a clear button
// document.getElementById('clear-note').addEventListener('click', clearData);

// add a listener to a download button
document.getElementById('save-note').addEventListener('click', renderData);


renderData();