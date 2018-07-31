
'use strict';

// counter
var counter = 0;


// function to execute on icon click (a tab opening)
function openEditNotesTab() 
{
  // open a backnote tab
  browser.tabs.create({url: "/edit-note.html"});
  
}

/*-----------------------------------------------------------------------*/












// function to execute on a context menu click (save selected text)
function saveSelectedText(e) 
{
    // text to save
    var text = e.selectionText.toString();

    // just adding it to a local storage each time with different key (backnote + counter)
    var tempKey = 'backnote' + counter;
    counter++;
    localStorage.setItem(tempKey, text);

    // reload last tab
    browser.tabs.reload();

}











/*-----------------------------------------------------------------------*/
// adding listener to our button on top right
browser.browserAction.onClicked.addListener(openEditNotesTab);

// adding listener to a context menu
browser.contextMenus.onClicked.addListener(saveSelectedText);

// Add a context menu action on selected text on a page
browser.contextMenus.create(
  {
    id: "save-note",
    title: "Save to backnotes",
  });

  




