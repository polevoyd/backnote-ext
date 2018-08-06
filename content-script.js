'use strict';

// copy the selected content to clipboard
function copySelection() 
{
  var selectedText = window.getSelection().toString().trim();
  
  // if content is not empty - then copy it
  if (selectedText) 
  {
    document.execCommand('Copy');
  }
}

// listen to a key pressed 
document.addEventListener('keydown', (event) => 
{
  const keyName = event.key;
  // alert('keydown event\n\n' + 'key: ' + keyName);

  // a key to do a copy (default - `)
  if (keyName == '`')
  {
    copySelection();
  }

});

// Add copySelection() as a listener to mouseup events.
document.addEventListener('mouseup', copySelection);

/////////////////////////////////////////////////
// CURRENT STATE
// COPYING FROM A MOUSEUP AND A TILDA '`' KEYDOWN