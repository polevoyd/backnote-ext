
let tempCurrentState = true;

// send data to a backnote
function sendTextToBacknote()
{




  // here need to check a current state and if on - then send data
  if (tempCurrentState)
  {
    // capture selected text
    var selectedText = window.getSelection().toString().trim();

    // send it to edit-note.js with key : backnote_data
    chrome.runtime.sendMessage({backnoteData: selectedText}, function(){});
  }
}

/*-----------------------------------------------------------------*/
// recieving current state update
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) 
  {
    tempCurrentState = request.currentStateUpdated;
  });

// Add copySelection() as a listener to mouseup events.
document.addEventListener('mouseup', sendTextToBacknote);

