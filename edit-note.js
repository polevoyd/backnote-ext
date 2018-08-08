'use strict';

var notepadDivElement = document.getElementsByClassName('notepad')[0];
var downloadButton = document.getElementById('downloadButton');

/*-----------------------------------------------------------------*/
// first line just an empty one
notepadDivElement.innerText += '\n';

/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/

/*-----------------------------------------------------------------*/
// set an string to a clipboard
function setStringToClipboard(str)
{
  // creating an <textarea> element
  var el = document.createElement('textarea');
  // setting it's value to a string we will set to a clipboard
  el.value = str;
  // make it read-only (optional, but just to make sure)
  el.setAttribute('readonly', '');
  // moving it somewhere outside of screen so it will be invisible
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  // attaching it to a body
  document.body.appendChild(el);
  // checking if there is anything selected already, true - save it, false - not saving it (later)
  var selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
  // selecting a content inside of our <textarea>
  el.select();
  // copying it
  document.execCommand('copy');
  // removing our <textarea> element
  document.body.removeChild(el);
  // checking if there been some content selected before
  if (selected)
  {
    // unselecting everything on a page
    document.getSelection().removeAllRanges();
    // restore an original selection
    document.getSelection().addRange(selected);
  }
}

/*-----------------------------------------------------------------*/
// paste a data
function pasteData()
{
  notepadDivElement.focus();
  document.execCommand('Paste');
}

/*-----------------------------------------------------------------*/
// filtering a paste data
const stopPasting = event =>
{
  // setting a data from clipboard
  const data = event.clipboardData.getData('text');

  // check if it's an empty space
  if (data === ' ')
  {
    // if true, then do not paste
    return event.preventDefault();
  }
  else
  {
    // paste data
    notepadDivElement.innerText += data;

    // Setting empty space to cb (so we can paste only once)
    setStringToClipboard(' ');

    // move caret to a new line two times
    notepadDivElement.innerText += '\n\n';
  }
};

/*-----------------------------------------------------------------*/
// download note as backnote.txt 
function downloadTxt()
{
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
      filename: 'backnote.txt'
    });
}
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
// listeners:
// on paste go through our filter
document.addEventListener('paste', stopPasting);
// render from a clipboard on a mouseover
document.addEventListener('mouseover', pasteData);
// adding a listener to downloadButton
downloadButton.addEventListener('click', downloadTxt);

/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
