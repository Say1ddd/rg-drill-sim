// src/content.ts

function injectButton() {
  const btn = document.createElement("button")

  btn.textContent = "Run 1+1 Test"
  btn.style.position = "fixed"
  btn.style.bottom = "20px"
  btn.style.right = "20px"
  btn.style.zIndex = "9999"
  btn.style.padding = "10px"

  btn.onclick = () => {
    const result = 1 + 1

    // send result to background
    chrome.runtime.sendMessage({
      type: "ADD_RESULT",
      payload: result,
    })

    console.log("Content computed:", result)
  }

  document.body.appendChild(btn)
}

injectButton()
