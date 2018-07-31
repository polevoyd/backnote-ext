'use strict';

var notepadDivElement = document.getElementsByClassName('notepad')[0];
var downloadButton = document.getElementById('downloadButton');
var fileNameToSaveAs = document.getElementById("downloadInput").value;
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

// function to change size of text
// function changeFontSize()
// {

//   var tmpStr = window.getSelection().toString();
 
  
// }

/*-----------------------------------------------------------------*/

// function to download note as txt
function saveAsTxt()
{
  var textToSave = notepadDivElement.innerText;
  var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
  var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
  
 
  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";
  downloadLink.href = textToSaveAsURL;
  downloadLink.onclick = destroyClickedElement;
  downloadLink.style.display = "none";
  document.body.appendChild(downloadLink);
 
  downloadLink.click();
}

// function to destroy downloading link after it clicked
function destroyClickedElement(event)
{
  document.body.removeChild(event.target);
}

// adding a listener
downloadButton.addEventListener('click', saveAsTxt);

/*-----------------------------------------------------------------*/
/*------------------end of function definitions--------------------*/
/*-----------------------------------------------------------------*/



renderTextToNotepad();

///////////////////////////////////////////////////////////////
///////////////TEST TEST TEST TEST TEST TEST TEST//////////////
///////////////////////////////////////////////////////////////

var testText = 'Chapter too parties its letters nor. Cheerful but whatever ladyship disposed yet judgment. Lasted answer oppose to ye months no esteem. Branched is on an ecstatic directly it. Put off continue you denoting returned juvenile. Looked person sister result mr to. Replied demands charmed do viewing ye colonel to so. Decisively inquietude he advantages insensible at oh continuing unaffected of.';
notepadDivElement.innerText = testText;


// add a listener to a clear button
// document.getElementById('clear-note').addEventListener('click', clearData);

// add a listener to a download button
// document.getElementById('save-note').addEventListener('click', renderData);


// renderData();


// rSavedNotes();