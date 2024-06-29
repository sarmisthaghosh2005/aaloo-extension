
chrome.runtime.onInstalled.addListener(function() {
    
    console.log('AALOO extension installed or updated.');
  });
  
  
  chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.type === 'verifyArticle') {
      
      const articleData = message.data;
      console.log('Verifying article:', articleData);
      setTimeout(function() {
        
        sendResponse({ success: true, message: 'Article verified successfully.' });
      }, 2000); 
      return true; 
    }
  });
  
  
  chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
    if (request.type === 'externalRequest') {
      
      console.log('Received external request:', request);
      sendResponse({ success: true, message: 'Request handled successfully.' });
    }
  });
  