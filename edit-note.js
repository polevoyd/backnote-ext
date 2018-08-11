
var notepadDivElement = document.getElementsByClassName('notepad')[0];
var downloadButton = document.getElementById('downloadButton');

var previousPaste = '';

notepadDivElement.innerText += '\n';

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
  browser.downloads.download(
    {
      url: tempURL,
      filename: tempFilename
    });
}

browser.runtime.onMessage.addListener(
  function(request, sender, sendResponse)
  {
    // get a data
    var data = request.backnoteData;
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
  });

downloadButton.addEventListener('click', downloadTxt);
