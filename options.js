'use strict';

// name of command
const commandName = 'backnote-text';

// getting current value and put in a textbox
async function updateUI() 
{
  let commands = await browser.commands.getAll();
  for (command of commands) 
  {
    if (command.name === commandName) 
    {
      document.querySelector('#shortcut').value = command.shortcut;
    }
  }
}

// updating a hotkeys to value in a box
async function updateShortcut() 
{
  await browser.commands.update(
    {
    name: commandName,
    shortcut: document.querySelector('#shortcut').value
  });
}

// reset a hotkeys
async function resetShortcut() 
{
  await browser.commands.reset(commandName);
  updateUI();
}

// updating page when it loads
document.addEventListener('DOMContentLoaded', updateUI);

// set listeners to update and reset buttons
document.querySelector('#update').addEventListener('click', updateShortcut)
document.querySelector('#reset').addEventListener('click', resetShortcut)

/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/


