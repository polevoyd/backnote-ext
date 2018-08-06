'use strict';

var notepadDivElement = document.getElementsByClassName('notepad')[0];
var downloadButton = document.getElementById('downloadButton');
var clearButton = document.getElementById('clearButton');

/*-----------------------------------------------------------------*/
/*-----------------defining all the functions----------------------*/
/*-----------------------------------------------------------------*/

// // function to render saved text to a screen
// function renderTextLs()
// {
//   // size of local storage
//   var entriesSize = localStorage.length;

//   // variable to count printed elements
//   var printedCounter = 0;

//   // 'backnote'+i - a key for entry
//   var i = 0;

//   // while printed is less that amount of entries
//   while (printedCounter < entriesSize)
//   {
//     // for each entry creating a temporary key
//     var tmpKey = 'backnote' + i;
//     var tmpData = localStorage.getItem(tmpKey);

//     // only print if its not undefined or null
//     if (tmpData !== undefined && tmpData !== null)
//     {
//       // on last element need to add '\n' before start with
//       // a new line
//       if (i === entriesSize-1)
//       {
//         notepadDivElement.innerText += '\n';
//       }

//       // adding it to our text and a new line after it
//       // notepadDivElement.innerText += '\r\n';
//       notepadDivElement.innerText += tmpData;
//       notepadDivElement.innerText += '\n\n';

//       // increment printed
//       printedCounter++;
//     }

//     // jump to next key
//     i++;
//   }

//   // clean storage so it does not repeats
//   localStorage.clear();
//}

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

/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/



/*-----------------------------------------------------------------*/
// TODO: restyle css with CSS Grid
// TODO: make file to download in .txt format
// TODO: make input field editable (bold, italic, font size, crossed, etc)
// TODO: add a shortcut keys

// clear text in a input field and reload page
function clearText()
{
  // notepadDivElement.textContent = '';
  // // setStringToClipboard(' ');
  // localStorage.clear();
}

// print or save as pdf
function printPdf()
{
  // clearButton.style.display='none';
  // downloadButton.style.display='none';

  // window.print();
  // clearButton.style.display='inline-block';
  // downloadButton.style.display='inline-block';



  // TEST TEST TEST



  // console.log(querying.then(logTabs, onError));
}

// adding a listeners
downloadButton.addEventListener('click', printPdf);
clearButton.addEventListener('click', clearText);

// listen to a key pressed 
document.addEventListener('keydown', (event) => 
{
  const keyName = event.key;

  // a key to do a copy (default - `)
  if (keyName == '`')
  {
    renderTextCb();
  }
});

// render from a clipboard on a mouseover
notepadDivElement.addEventListener('mouseover', renderTextCb);



// // funtion to blur on hover
// function blurOnHover()
// {
//   document.querySelector('canvas').style.filter = 'blur(5px)';
// }

// // function to unblur on hover
// function unblurBack()
// {
//   document.querySelector('canvas').style.filter = 'blur(0px)';
// }

// // adding listeners for bluring/unbluring
// // add to notepad element
// notepadDivElement.addEventListener('mouseover', blurOnHover);
// notepadDivElement.addEventListener('mouseleave', unblurBack);

// // add to clear button
// clearButton.addEventListener('mouseover', blurOnHover);
// clearButton.addEventListener('mouseleave', unblurBack);

// // add to download button
// downloadButton.addEventListener('mouseover', blurOnHover);
// downloadButton.addEventListener('mouseleave', unblurBack);

/*-----------------------------------------------------------------*/
/*------------------end of function definitions--------------------*/
/*-----------------------------------------------------------------*/

// random crash on load???
// renderTextLs();
//////////////////////////
// renderTextCb();

// render from a local storage
// notepadDivElement.addEventListener('mouseover', renderTextLs);


///////////////////////////////////////////////////////////////
///////////////TEST TEST TEST TEST TEST TEST TEST//////////////
///////////////////////////////////////////////////////////////

// // function to refresh a page each time we switch to it
// function handleActivated(activeInfo)
// {
//   console.log(activeInfo);
//   // window.location.reload(true);
// }
// // attach listener to on activation method
// browser.tabs.onActivated.addListener(handleActivated);

// CURRENT STATE:
// PASTING ON MOUSEOVER AND A TILDA '`'