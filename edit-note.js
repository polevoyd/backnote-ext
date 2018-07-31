'use strict';

var notepadDivElement = document.getElementsByClassName('notepad')[0];

/*-----------------------------------------------------------------*/
/*-----------------defining all the functions----------------------*/
/*-----------------------------------------------------------------*/

// size of local storage
var entriesSize = localStorage.length;

// function to render saved text to a screen
function renderTextToNotepad()
{
  // running through each entry in local storage
  for (var i=0 ; i < entriesSize; i++)
  {
  // for each entry creating a temporary key
    var tmpKey = 'backnote' + i;

    // and recieving a temporary data
    var tmpData = localStorage[tmpKey];

    // on last element need to add '\n' before start with
    // a new line
    if (i === entriesSize-1)
    {
      notepadDivElement.innerText += '\n';
    }

    // adding it to our text and a new line after it
    // notepadDivElement.innerText += '\r\n';
    notepadDivElement.innerText += tmpData;
    notepadDivElement.innerText += '\n';
  
  }
}



/*-----------------------------------------------------------------*/
/*------------------end of function definitions--------------------*/
/*-----------------------------------------------------------------*/



renderTextToNotepad();


// add a listener to a clear button
// document.getElementById('clear-note').addEventListener('click', clearData);

// add a listener to a download button
// document.getElementById('save-note').addEventListener('click', renderData);


// renderData();


// rSavedNotes();