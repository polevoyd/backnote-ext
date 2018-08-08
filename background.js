'use strict';

/*-----------------------------------------------------------------*/
/*-----------------defining all the functions----------------------*/
/*-----------------------------------------------------------------*/

// function onCreated(tab) 
// {
//   console.log(`Created new tab: ${tab.id}`);
// }

// function onError(error) {
//   console.log(`Error: ${error}`);
// }




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
      // moving backnote tab to last position
      var moving = browser.tabs.move(backnoteTabId, {index: -1});

      // TODO: CORRECT SIZE AND ALIGNMENT AFTER OPENING
      // to create a new window and put existing backnote tab in there
      browser.windows.create(
        {
          tabId: backnoteTabId,
          type: 'popup', // OR REGULAR WINDOW???
          height: 720,
          width: 540,
        });
    }
    else
    {
      // IF PAGE NOT EXIST - CREATING IT
      var newBacknoteId = undefined;

      // TODO: create a new tab
      var newBacknoteTab = browser.tabs.create({url: './edit-note.html'});
      // TODO: find ID of last tab (or current tab)
      newBacknoteTab.then(function(tab)
    {

      browser.windows.create(
        {
          tabId: tab.id,
          type: 'popup', // OR REGULAR WINDOW????
          height: 720,
          width: 540,
        });




    });


      




      // TODO: move that tab to separate window



      
    }
  });
}

//--------------------------------------------------------------------
// adding listener to our button on top right
browser.browserAction.onClicked.addListener(createOrSwitchToBacknoteTab);

// set listener to open a tab with notes
browser.commands.onCommand.addListener(createOrSwitchToBacknoteTab);

/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/
/*-----------------------------------------------------------------*/















// // move existing backnote tab to last place or create a new
// function createOrSwitchToBacknoteTab()
// {
//   // checker to see if tab is already exist (doesnt by default)
//   var backnoteTabId = undefined;
//   // request to show all tabs
//   browser.tabs.query({}, function(tabs)
//   {
//     // run loop throught all tabs
//     for (var t of tabs)
//     {
//       // check if current tab is "Backnote"
//       if (t.title === 'Backnote')
//       {
//         // if yes, save ID and jump out
//         backnoteTabId = t.id;
//         break;
//       }
//     }
//     // if ID is not undefined
//     if (backnoteTabId)
//     {
//       // moving backnote tab to last position
//       var moving = browser.tabs.move(backnoteTabId, {index: -1});

//       // TODO: CORRECT SIZE AND ALIGNMENT AFTER OPENING
//       // to create a new window and put existing backnote tab in there
//       browser.windows.create(
//         {
//           tabId: backnoteTabId,
//           type: 'popup', // OR REGULAR WINDOW???
//           height: 720,
//           width: 540,
//         });
//     }
//     else
//     {
//       // IF PAGE NOT EXIST - CREATING IT
//       // browser.tabs.create({url: '/edit-note.html'});

//       browser.windows.create(
//         {
//           url: './edit-note.html',
//           type: 'popup', // OR REGULAR WINDOW????
//           height: 720,
//           width: 540,
//         });
//     }
//   });
// }