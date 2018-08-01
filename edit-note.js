'use strict';

// var notepadDivElement = document.getElementsByClassName('notepad')[0];
var notepadDivElement = document.getElementById('notepad');
var downloadButton = document.getElementById('downloadButton');

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

// function to download note as txt
// function download() 
// {
//   var element = document.createElement('a');
//   element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(testText));
//   element.setAttribute('download', 'backnote.txt');

//   element.style.display = 'none';
//   document.body.appendChild(element);

//   element.click();

//   document.body.removeChild(element);
// }

// print or save as pdf
function printPdf()
{
  downloadButton.style.display= "none";
  window.print();
}

// adding a listener
downloadButton.addEventListener('click', printPdf);

/*-----------------------------------------------------------------*/
/*------------------end of function definitions--------------------*/
/*-----------------------------------------------------------------*/

renderTextToNotepad();

///////////////////////////////////////////////////////////////
///////////////TEST TEST TEST TEST TEST TEST TEST//////////////
///////////////////////////////////////////////////////////////


