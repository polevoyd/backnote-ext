// finding elements on a page
let notepadDivElement = document.getElementsByClassName('notepad')[0];
let downloadButton = document.getElementById('downloadButton');


/*-----------------------------------------------------------------*/
// previous paste to not paste duplicates
let previousPaste = '';

/*-----------------------------------------------------------------*/
// first line just an empty one
if (notepadDivElement)
{
  notepadDivElement.innerText += '\n';
}

/*-----------------------------------------------------------------*/
// download note as backnote.txt
function downloadTxt()
{
  // get a name for a file (default will be backnote.txt)
  let tempFilename = document.getElementById('filenameInput').value;
  // get a text
  let textFromNotepad = notepadDivElement.innerText;
  // create a Blob object from it
  let tempBlob = new Blob([textFromNotepad], {type: 'text/plain'});
  // create a temporary URL
  let tempURL = URL.createObjectURL(tempBlob);
  // download that URL
  chrome.downloads.download(
    {
      url: tempURL,
      filename: tempFilename
    });
}

/*-----------------------------------------------------------------*/
// recieving data with a key : backnoteData
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse)
  {
    // get a data
    let data = request.backnoteData;
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

// adding a listener to downloadButton
if (downloadButton)
{
  downloadButton.addEventListener('click', downloadTxt);
}
