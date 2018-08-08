'use strict';

// name of our command
var commandName = 'backnote-text';

/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/

// updating a hotkeys by taking value from a textbox

function updateShortcut() 
{
  browser.commands.update(
    {
      name: commandName,
      shortcut: document.querySelector('#shortcut').value
    });
}

// Reset the shortcut and update the textbox.

function resetShortcut() 
{
  browser.commands.reset(commandName);
}

// Handle update and reset button clicks
document.querySelector('#update').addEventListener('click', updateShortcut);
document.querySelector('#reset').addEventListener('click', resetShortcut);

/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
