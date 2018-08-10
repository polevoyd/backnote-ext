
// // copy the selected content to clipboard and a local storage
// function copySelection()
// {
//   var selectedText = window.getSelection().toString().trim();

//   // if content is not empty - then copy it
//   if (selectedText)
//   {
//     document.execCommand('Copy');
//   }
// }

// //---------------------------------------------------------------------
// // Add copySelection() as a listener to mouseup events.
// document.addEventListener('mouseup', copySelection);














// function sendToExtension(e)
// {




//   var selectedText = window.getSelection().toString().trim();

//   // if content is not empty - then copy it
//   if (selectedText)
//   {
//     browser.runtime.sendMessage({'backnote_data': selectedText});
//   }


// }

// //---------------------------------------------------------------------
// // Add copySelection() as a listener to mouseup events.
// document.addEventListener('mouseup', copySelection);



// send data to a backnote
function sendTextToBacknote()
{
  // capture selected text 
  var selectedText = window.getSelection().toString().trim();

  // send it to edit-note.js with key : backnote_data
  chrome.runtime.sendMessage({backnoteData: selectedText}, function(){});
}

// // Add copySelection() as a listener to mouseup events.
document.addEventListener('mouseup', sendTextToBacknote);