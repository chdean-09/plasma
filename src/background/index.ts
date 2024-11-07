import { sendToBackground } from "@plasmohq/messaging"

// async function pingMessage() {
//   const resp = await sendToBackground({
//     name: "ping",
//     body: {
//       email: "test@email.com"
//     },
//     extensionId: "5d7f22637eed3d649ce16cd807f08049c762964d@temporary-addon"
//   })

//   console.log(1)
// }

// const inject = async (tabId: number) => {
//   chrome.scripting.executeScript(
//     {
//       target: {
//         tabId
//       },
//       world: "MAIN",
//       func: pingMessage
//     },
//     () => {
//       console.log("Background script got callback after injection")
//     }
//   )
// }

// chrome.tabs.onActivated.addListener((e) => {
//   console.log(e)
//   inject(e.tabId)
// })

console.log(
  "Live now; make now always the most precious time. Now will never come again."
)

const handleClick = (tab) => {
  console.log("clicked", tab.id);
  if (!tab.id) throw new Error("tab id not found");
  chrome.tabs.sendMessage(tab.id, {
    name: "show-dialog"
  });
};

if (chrome.action != undefined) {
  chrome.action.onClicked.addListener(handleClick);
} else {
  chrome.browserAction.onClicked.addListener(handleClick);
}

chrome.action.onClicked.addListener(() => {
  console.log(`action clicked: 2`)
})

/* Note if you're building for firefox or mv2 in general, chrome.action will be undefined so you have to do something like this:

@see https://stackoverflow.com/questions/70216500/chrome-action-is-undefined-migrating-to-v3-manifest

const handleClick = (tab) => {
  console.log("clicked", tab.id);
  if (!tab.id) throw new Error("tab id not found");
  chrome.tabs.sendMessage(tab.id, {
    name: "show-dialog"
  });
};

if (chrome.action != undefined) {
  chrome.action.onClicked.addListener(handleClick);
} else {
  chrome.browserAction.onClicked.addListener(handleClick);
}
*/


chrome.commands.onCommand.addListener((command) => {
  if (command === "test") {
    console.log(`test command: 1`)
  }
})