'use strict';

// counter
// var counter = 0;

/*-----------------------------------------------------------------*/
/*-----------------defining all the functions----------------------*/
/*-----------------------------------------------------------------*/


// function to log errors
function onError(error)
{
  console.log(`Error: ${error}`);
}


function onUpdated(tab)
{
  console.log(`Updated tab: ${tab.id}`);
}



function createOrSwitchToBacknoteTab(e)
{
  // checker to see if tab is already exist (doesnt by default)
  var backnoteTabId = undefined;

  // request to show all tabs
  browser.tabs.query({}, function(tabs)
  {

    // run loop throught all tabs
    for (var t of tabs)
    {
      // check if current tab is "Backnote"
      if (t.title === 'Backnote')
      {
        // if yes, save ID and jump out
        backnoteTabId = t.id;
        break;
      }
    }

    // if ID is not undefined
    if (backnoteTabId)
    {
      // jump to backnote tab
      var updating = browser.tabs.update(backnoteTabId,
        {
          active: true,
          url: '/edit-note.html'
        });
      updating.then(onUpdated, onError);
    }
    else
    {
      // open new backnote tab
      browser.tabs.create({url: '/edit-note.html'});
    }





    console.log(backnoteTabId);
    console.log(tabs);
  });



  // HERE WE NEED TO SWITCH TO A BACKNOTE TAB




}
















////////////////////////////////////////////////////////////////////////////////////

// function to execute on a context menu click (save selected text)
// function saveSelectedText(e)
// {
//   // text to save
//   var text = e.selectionText.toString();

//   // just adding it to a local storage each time with different key (backnote + counter)
//   var tempKey = 'backnote' + counter;
//   counter++;
//   localStorage.setItem(tempKey, text);
// }

// adding listener to our button on top right
browser.browserAction.onClicked.addListener(createOrSwitchToBacknoteTab);

// adding listener to a context menu
// browser.contextMenus.onClicked.addListener(saveSelectedText);

// Add a context menu action on selected text on a page
browser.contextMenus.create(
  {
    id: 'save-note',
    title: 'Save to backnotes'
  });

// set listener to open a tab with notes
browser.commands.onCommand.addListener(createOrSwitchToBacknoteTab);

/*-----------------------------------------------------------------*/
/*------------------end of function definitions--------------------*/
/*-----------------------------------------------------------------*/

///////////////////////////////////////////////////////////////
///////////////TEST TEST TEST TEST TEST TEST TEST//////////////
///////////////////////////////////////////////////////////////

