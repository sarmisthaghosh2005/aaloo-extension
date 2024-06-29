
function getVerificationHistory() {

    const history = JSON.parse(localStorage.getItem('verificationHistory')) || [];
    return history;
  }
  
  
  function addToVerificationHistory(verification) {
    
    let history = JSON.parse(localStorage.getItem('verificationHistory')) || [];
    history.push(verification);
    localStorage.setItem('verificationHistory', JSON.stringify(history));
  }
  
  
  function clearVerificationHistory() {
    
    localStorage.removeItem('verificationHistory');
  }
  
  
  const verification = {
    id: 1,
    articleUrl: 'https://example.com/article',
    verified: true,
    timestamp: new Date().toISOString()
  };
  addToVerificationHistory(verification);
  console.log('Verification added to history:', verification);
  
  
  const history = getVerificationHistory();
  console.log('Verification history:', history);
  
  