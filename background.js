
var currentState = true;

function createOrSwitchToBacknoteTab()
{
  var backnoteTabId = undefined;
  browser.tabs.query({}, function(tabs)
  {
    for (var t of tabs)
    {
      if (t.title === 'Backnote')
      {
        backnoteTabId = t.id;
        break;
      }
    }
    if (backnoteTabId)
    {
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
      var newBacknoteId = undefined;
      var newBacknoteTab = browser.tabs.create({url: './edit-note.html'});
      newBacknoteTab.then(function(tab)
      {
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

function switchCurrentState()
{
  if (currentState)
  {
    browser.commands.onCommand.removeListener(createOrSwitchToBacknoteTab);
    currentState = false;
    browser.browserAction.setIcon({path:'./images/icon_off.png'});
  }
  else
  {
    browser.commands.onCommand.addListener(createOrSwitchToBacknoteTab);
    currentState = true;
    browser.browserAction.setIcon({path:'./images/icon_on.png'});
  }
}

browser.browserAction.onClicked.addListener(switchCurrentState);
browser.commands.onCommand.addListener(createOrSwitchToBacknoteTab);