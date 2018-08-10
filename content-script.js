
// //---------------------------------------------------------------------
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

// send data to a backnote
function sendTextToBacknote()
{
  // capture selected text 
  var selectedText = window.getSelection().toString().trim();

  // send it to edit-note.js with key : backnote_data
  browser.runtime.sendMessage({backnoteData: selectedText}, function(){ console.log('DATA SENT!');});
}

// Add copySelection() as a listener to mouseup events.
document.addEventListener('mouseup', sendTextToBacknote);