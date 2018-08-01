'use strict';

var notepadDivElement = document.getElementsByClassName('notepad')[0];
var downloadButton = document.getElementById('downloadButton');
var clearButton = document.getElementById('clearButton');



/*-----------------------------------------------------------------*/
/*-----------------defining all the functions----------------------*/
/*-----------------------------------------------------------------*/

// function to render saved text to a screen
function renderTextToNotepad()
{
  // size of local storage
  var entriesSize = localStorage.length;

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



/*-----------------------------------------------------------------*/
// TODO: restyle css with CSS Grid
// TODO: make file to download in .txt format
// TODO: make input field editable (bold, italic, font size, crossed, etc)
// TODO: add a shortcut keys

// clear text in a input field and reload page
function clearText()
{
  localStorage.clear();
  window.location.reload();
}

// print or save as pdf
function printPdf()
{
  downloadButton.style.display='none';
  window.print();
  downloadButton.style.display='inline-block';
}

// adding a listeners
downloadButton.addEventListener('click', printPdf);
clearButton.addEventListener('click', clearText);

/*-----------------------------------------------------------------*/
/*------------------end of function definitions--------------------*/
/*-----------------------------------------------------------------*/

renderTextToNotepad();

///////////////////////////////////////////////////////////////
///////////////TEST TEST TEST TEST TEST TEST TEST//////////////
///////////////////////////////////////////////////////////////

