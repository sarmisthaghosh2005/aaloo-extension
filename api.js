
function verifyArticle(articleUrl) {
    return fetch('https://api.example.com/verify-article', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url: articleUrl })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      
      return data;
    })
    .catch(error => {
      console.error('Error verifying article:', error);
      return { error: error.message };
    });
  }
  
 
  function searchArticles(query) {
  
    return fetch(`https://api.example.com/search?q=${encodeURIComponent(query)}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      
      return data.results;
    })
    .catch(error => {
      console.error('Error searching articles:', error);
      return { error: error.message };
    });
  }
  
  
  