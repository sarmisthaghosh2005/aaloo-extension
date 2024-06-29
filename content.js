
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.type === 'captureScreenshot') {
      captureScreenshot();
    }
  });
  
  
  function captureScreenshot() {
    chrome.tabs.captureVisibleTab(null, { format: 'png' }, function(dataUrl) {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
        return;
      }
      
      chrome.runtime.sendMessage({
        type: 'screenshotCaptured',
        dataUrl: dataUrl
      });
    });
  }
  
  (function() {
    console.log('Content script loaded and running.');
  })();
  