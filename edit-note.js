'use strict';

var notepadDivElement = document.getElementsByClassName('notepad')[0];
var downloadButton = document.getElementById('downloadButton');
var clearButton = document.getElementById('clearButton');

/*-----------------------------------------------------------------*/
/*-----------------defining all the functions----------------------*/
/*-----------------------------------------------------------------*/

// move caret to end of contenteditable
function setEndOfContenteditable(contentEditableElement)
{
  var range,selection;
  if(document.createRange)
  {
    //Create a range (a range is a like the selection but invisible)
    range = document.createRange();
    //Select the entire contents of the element with the range
    range.selectNodeContents(contentEditableElement);
    //collapse the range to the end point. false means collapse to end rather than the start
    range.collapse(false);
    //get the selection object (allows you to change selection)
    selection = window.getSelection();
    //remove any selections already made
    selection.removeAllRanges();
    //make the range you have just created the visible selection
    selection.addRange(range);
  }
  else if(document.selection)
  {
    // for IE
    //Create a range (a range is a like the selection but invisible)
    range = document.body.createTextRange();
    //Select the entire contents of the element with the range
    range.moveToElementText(contentEditableElement);
    //collapse the range to the end point. false means collapse to end rather than the start
    range.collapse(false);
    //Select the range (make it the visible selection
    range.select();
  }
}
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

// render from clipboard
function renderTextCb()
{
  // find element to add text to
  var notepadArea = document.getElementsByClassName('notepad')[0];

  // set caret to the end of that element
  setEndOfContenteditable(notepadArea);

  // paste data
  document.execCommand('paste');

  // Setting empty space to cb (so we can paste only once)
  setStringToClipboard(' ');

  // add an empty separator line
  notepadDivElement.innerText += '\n';
}




function pasteData()
{
  window.execCommand('paste');
}




/*-----------------------------------------------------------------*/

/*-----------------------------------------------------------------*/

/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/





// print or save as pdf
function printPdf()
{
  // clearButton.style.display='none';
  // downloadButton.style.display='none';

  // window.print();
  // clearButton.style.display='inline-block';
  // downloadButton.style.display='inline-block';

}

// adding a listeners
// downloadButton.addEventListener('click', printPdf);
// clearButton.addEventListener('click', clearText);

// render from a clipboard on a mouseover
// notepadDivElement.addEventListener('mouseover', renderTextCb);



/*-----------------------------------------------------------------*/
/*------------------end of function definitions--------------------*/
/*-----------------------------------------------------------------*/


const stopPasting = event => 
{
  const data = event.clipboardData.getData('text');

  if (data === ' ')
  {
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

document.addEventListener('paste', stopPasting);
// render from a clipboard on a mouseover
notepadDivElement.addEventListener('mouseover', stopPasting);