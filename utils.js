
function displayNotification(message) {
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icons/icon128.png',
      title: 'AALOO Extension',
      message: message
    });
  }
  
  
  function formatDateTime(date) {
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    };
    return new Date(date).toLocaleDateString('en-US', options);
  }
  
  
  function logMessage(message) {
    console.log(`[AALOO] ${message}`);
  }
  
  
  