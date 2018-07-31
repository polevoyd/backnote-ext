'use strict';

var notepadDivElement = document.getElementsByClassName('notepad')[0];


/*-----------------------------------------------------------------*/
/*-----------------defining all the functions----------------------*/
/*-----------------------------------------------------------------*/


// // function to clear data from a local storage
// function clearData()
// {
//   // clear physical elements
//   clearElementsOnPage();

//   // clear storage
//   localStorage.clear();

  

// }




// // function to clear html elements on a page
// function clearElementsOnPage()
// {
//   var ulElement = document.getElementById('notesUl');

//   while(ulElement.firstChild)
//   {
//     ulElement.removeChild(ulElement.firstChild);
//   }

//   // // reload last tab
//   // browser.tabs.reload();
// }

//TODO: make a function that collect all data from a local storage and return a big text
function renderDataToText()
{
  var text = '';
  var newLine = '\n';

  // size of local storage
  var entriesSize = localStorage.length;

  // running through each entry
  for (var i=0 ; i < entriesSize; i++)
  {
    // for each entry creating a temporary key
    var tmpKey = 'backnote' + i;

    // and recieving a temporary data
    var tmpData = localStorage.getItem(tmpKey);

    // adding it to our text and a new line after it
    text += tmpData + newLine;

    return text;
  }
}

//TODO: make a function that pull all that data into a notepad class element
function showOnNotepad()
{
  notepadDivElement.innerHTML = renderDataToText();
}





// add a listener to a clear button
// document.getElementById('clear-note').addEventListener('click', clearData);

// add a listener to a download button
// document.getElementById('save-note').addEventListener('click', renderData);


// renderData();


// rSavedNotes();