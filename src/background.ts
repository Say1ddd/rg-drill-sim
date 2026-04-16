chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.type === "ADD_RESULT") {
    console.log("Background received result:", message.payload)

    sendResponse({ status: "ok" })
  }

  return true
})
