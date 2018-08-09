
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/

// move existing backnote tab to last place or create a new
function createOrSwitchToBacknoteTab()
{
  // checker to see if tab is already exist (doesnt by default)
  var backnoteTabId = undefined;
  // request to show all tabs
  chrome.tabs.query({}, function(tabs)
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
      // to create a new window and put existing backnote tab in there
      chrome.windows.create(
        {
          tabId: backnoteTabId,
          type: 'popup',
          height: 720,
          width: 540,
        });
    }
    else
    {
      // to create a new window and open tab in there
      chrome.windows.create(
        {
          url: './edit-note.html',
          type: 'popup',
          height: 720,
          width: 540,
        });
    }
  });
}

//--------------------------------------------------------------------
// adding listener to our button on top right
chrome.browserAction.onClicked.addListener(createOrSwitchToBacknoteTab);

// set listener to open a tab with notes
chrome.commands.onCommand.addListener(createOrSwitchToBacknoteTab);

/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
