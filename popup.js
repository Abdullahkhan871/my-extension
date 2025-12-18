document.getElementById("runOldAnimated").addEventListener("click", ()=>{
  chrome.tabs.query({active:true, currentWindow:true}, (tabs)=>{
    chrome.tabs.sendMessage(tabs[0].id, {
      action : "runOldAnimated"
    })
  })
})
document.getElementById("runNewAnimated").addEventListener("click", ()=>{
  chrome.tabs.query({active:true, currentWindow:true}, (tabs)=>{
    chrome.tabs.sendMessage(tabs[0].id, {
      action : "runNewAnimated"
    })
  })
})
document.getElementById("runNewStatic").addEventListener("click", ()=>{
  chrome.tabs.query({active:true, currentWindow:true}, (tabs)=>{
    chrome.tabs.sendMessage(tabs[0].id, {
      action : "runNewStatic"
    })
  })
})