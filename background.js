// current toggle state: true - active, false - not active
var currentState = true;

// move existing backnote tab to last place or create a new
function createOrSwitchToBacknoteTab()
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
      // to create a new window and put existing backnote tab in there
      browser.windows.create(
        {
          tabId: backnoteTabId,
          type: 'popup',
          height: 720,
          width: 540,
        });
    }
    else
    {
      // IF PAGE NOT EXIST - CREATING IT
      var newBacknoteId = undefined;
      // create a new tab
      var newBacknoteTab = browser.tabs.create({url: './edit-note.html'});
      // find ID of last tab (or current tab)
      newBacknoteTab.then(function(tab)
      {
        // create a window from it
        browser.windows.create(
          {
            tabId: tab.id,
            type: 'popup',
            height: 720,
            width: 540,
          });
      });
    }
  });
}

/*-----------------------------------------------------------------*/
// function to attach and detach listener depending on currentStateIsOn
function switchCurrentState()
{
  // if on - then turn off
  if (currentState)
  {
    browser.commands.onCommand.removeListener(createOrSwitchToBacknoteTab);
    // change current state
    currentState = false;
    // change icon on top to red
    browser.browserAction.setIcon({path:'./images/icon_off.png'});
  }
  else
  {
    // set listener to open a tab with notes
    browser.commands.onCommand.addListener(createOrSwitchToBacknoteTab);
    // change current state
    currentState = true;
    // change icon on top to green
    browser.browserAction.setIcon({path:'./images/icon_on.png'});
  }
}

/*-----------------------------------------------------------------*/
// attach listener to upper right icon to toggle extension
browser.browserAction.onClicked.addListener(switchCurrentState);
// set listener to open a tab with notes
browser.commands.onCommand.addListener(createOrSwitchToBacknoteTab);