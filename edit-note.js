
// finding elements on a page
var notepadDivElement = document.getElementsByClassName('notepad')[0];
var downloadButton = document.getElementById('downloadButton');

// previous paste to not paste duplicates
var previousPaste = '';
/*-----------------------------------------------------------------*/
// first line just an empty one
notepadDivElement.innerText += '\n';

/*-----------------------------------------------------------------*/
// paste a data
function pasteData()
{
  document.execCommand('Paste');
}

/*-----------------------------------------------------------------*/
// download note as backnote.txt
function downloadTxt()
{
  // get a name for a file (default will be backnote.txt)
  var tempFilename = document.getElementById('filenameInput').value;
  // get a text
  let textFromNotepad = notepadDivElement.innerText;
  // create a Blob object from it
  var tempBlob = new Blob([textFromNotepad], {type: 'text/plain'});
  // create a temporary URL
  var tempURL = URL.createObjectURL(tempBlob);
  // download that URL
  chrome.downloads.download(
    {
      url: tempURL,
      filename: tempFilename
    });
}

/*-----------------------------------------------------------------*/
// Overwrite what is being pasted onto the clipboard.
document.addEventListener('paste', function(e)
{
  // data to paste
  var data = e.clipboardData.getData('text/plain');

  // check if previous one is not the same
  if (data !== previousPaste)
  {
    // paste the data into the document.
    notepadDivElement.innerText += data;
    // add an empty line and move caret to new line
    notepadDivElement.innerText += '\n\n';
    // set previous
    previousPaste = data;
  }
  else
  {
    // Do not paste
    e.preventDefault();
  }
});

/*-----------------------------------------------------------------*/
// listeners:
// render from a clipboard on a mouseover
document.addEventListener('mouseover', pasteData);
// adding a listener to downloadButton
downloadButton.addEventListener('click', downloadTxt);
