
function sendTextToBacknote()
{
  var selectedText = window.getSelection().toString().trim();
  browser.runtime.sendMessage({backnoteData: selectedText}, function(){});
}

document.addEventListener('mouseup', sendTextToBacknote);