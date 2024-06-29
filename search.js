
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
  
  
  const searchQuery = 'fake news';
  searchArticles(searchQuery)
    .then(results => {
      console.log('Search results:', results);
      
    })
    .catch(error => {
      console.error('Error performing search:', error);
      
    });
  