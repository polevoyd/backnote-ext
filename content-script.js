'use strict';

/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/

//---------------------------------------------------------------------
// copy the selected content to clipboard and a local storage
function copySelection() 
{
  var selectedText = window.getSelection().toString().trim();

  // if content is not empty - then copy it
  if (selectedText) 
  {
    document.execCommand('Copy');
  }
}
//---------------------------------------------------------------------

// Add copySelection() as a listener to '`' button.
document.addEventListener('keydown', (event) => 
{
  const keyName = event.key;

  // a key to do a copy (default - `)
  if (keyName == '`')
  {
    copySelection();
  }
});

// Add copySelection() as a listener to mouseup events.
document.addEventListener('mouseup', copySelection);

/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/