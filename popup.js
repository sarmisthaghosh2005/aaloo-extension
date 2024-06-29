document.addEventListener('DOMContentLoaded', function () {
    const captureButton = document.getElementById('capture');
    const searchButton = document.getElementById('search');
    const clearHistoryButton = document.getElementById('clear-history');
    const themeLink = document.getElementById('theme-link');
  

    captureButton.addEventListener('click', function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.captureVisibleTab(tabs[0].windowId, { format: 'png' }, function(dataUrl) {
          if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
            return;
          }
          const imgElement = document.createElement('img');
          imgElement.src = dataUrl;
          imgElement.style.maxWidth = '100%';
          document.getElementById('screenshot-result').innerHTML = '';
          document.getElementById('screenshot-result').appendChild(imgElement);
  
          
          fetch('https://your-server.com/verify', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ image: dataUrl })
          })
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data);
            
          })
          .catch((error) => {
            console.error('Error:', error);
          });
        });
      });
    });
  
   
    searchButton.addEventListener('click', function() {
      const query = document.getElementById('search-query').value;
      performSearch(query);
    });
  
   
    clearHistoryButton.addEventListener('click', function() {
      clearVerificationHistory();
    });
  
    
    document.getElementById('theme-switch').addEventListener('change', function(event) {
      switchTheme(event.target.value);
    });
  
    
    function performSearch(query) {
      fetch(`https://your-server.com/search?query=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
          const searchResults = document.getElementById('search-results');
          searchResults.innerHTML = '';
          data.results.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.className = 'search-result';
            resultElement.innerHTML = `
              <h3>${result.title}</h3>
              <p>${result.snippet}</p>
              <a href="${result.url}" target="_blank">Read more</a>
            `;
            searchResults.appendChild(resultElement);
          });
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  

    function clearVerificationHistory() {
      chrome.storage.local.set({ verificationHistory: [] }, function() {
        document.getElementById('history-list').innerHTML = '';
      });
    }
  
    
    function loadVerificationHistory() {
      chrome.storage.local.get('verificationHistory', function(data) {
        const historyList = document.getElementById('history-list');
        historyList.innerHTML = '';
        if (data.verificationHistory) {
          data.verificationHistory.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.date}: ${item.url}`;
            historyList.appendChild(listItem);
          });
        }
      });
    }
  
    
    function switchTheme(theme) {
      themeLink.href = `styles/themes/${theme}.css`;
      chrome.storage.local.set({ theme: theme });
    }
  
    
    chrome.storage.local.get('theme', function(data) {
      if (data.theme) {
        switchTheme(data.theme);
        document.getElementById('theme-switch').value = data.theme;
      }
    });
  
    
    loadVerificationHistory();
  });
  