
// const commandName = 'backnote';

// /*-----------------------------------------------------------------*/
// /*-----------------------------------------------------------------*/
// /*-----------------------------------------------------------------*/

// // updating UI and put current 'backnote' hotkeys to textbox
// async function updateUI() 
// {
//   let commands = await browser.commands.getAll();
//   for (command of commands) 
//   {
//     if (command.name === commandName) 
//     {
//       document.querySelector('#shortcut').value = command.shortcut;
//     }
//   }
// }

// // change hotkeys to what currently in textbox
// async function updateShortcut() 
// {
//   await browser.commands.update(
//     {
//     name: commandName,
//     shortcut: document.querySelector('#shortcut').value
//   });
// }

// // reset hotkeys and set default
// async function resetShortcut() 
// {
//   await browser.commands.reset(commandName);
//   updateUI();
// }

// // updating page when it loads
// document.addEventListener('DOMContentLoaded', updateUI);

// // listeners for a buttons reset and update
// document.querySelector('#update').addEventListener('click', updateShortcut);
// document.querySelector('#reset').addEventListener('click', resetShortcut);

// /*-----------------------------------------------------------------*/
// /*-----------------------------------------------------------------*/
// /*-----------------------------------------------------------------*/