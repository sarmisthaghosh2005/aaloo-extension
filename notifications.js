
function displayNotification(message) {
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icons/icon128.png',
      title: 'AALOO Extension',
      message: message
    });
  }
  
  
  function displayNotificationWithButtons(message, buttons) {
    chrome.notifications.create({
      type: 'basic',
      iconUrl: 'icons/icon128.png',
      title: 'AALOO Extension',
      message: message,
      buttons: buttons
    });
  }
  
  chrome.notifications.onButtonClicked.addListener(function(notificationId, buttonIndex) {
    
    if (notificationId === 'notification-with-buttons') {
      if (buttonIndex === 0) {
        console.log('Button 1 clicked');
       
      } else if (buttonIndex === 1) {
        console.log('Button 2 clicked');
        
      }
    }
  });
  
  