'use strict';

/*-----------------------------------------------------------------*/
/*-----------------defining all the functions----------------------*/
/*-----------------------------------------------------------------*/
function renderData()
{
  // need to clear physical elements on a page and rerender them again with new data
  clearElementsOnPage();

  // find ul on a page
  var ulEl = document.getElementById('notesUl');

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

// function to clear data from a local storage
function clearData()
{
  // clear physical elements
  clearElementsOnPage();

  // clear storage
  localStorage.clear();

  

}




// function to clear html elements on a page
function clearElementsOnPage()
{
  var ulElement = document.getElementById('notesUl');

  while(ulElement.firstChild)
  {
    ulElement.removeChild(ulElement.firstChild);
  }

  // // reload last tab
  // browser.tabs.reload();
}









// add a listener to a clear button
// document.getElementById('clear-note').addEventListener('click', clearData);

// add a listener to a download button
// document.getElementById('save-note').addEventListener('click', renderData);


// renderData();


// rSavedNotes();