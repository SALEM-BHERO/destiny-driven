const axios = require('axios');

async function testAPI() {
  try {
    // Test health endpoint
    const healthResponse = await axios.get('http://localhost:3001/health');
    console.log('Health check:', healthResponse.data);
    
    // Test loan application submission
    const loanData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
      loanType: 'Business Loan',
      message: 'Looking for a business loan'
    };
    
    const loanResponse = await axios.post('http://localhost:3001/api/loans/apply', loanData);
    console.log('Loan application response:', loanResponse.data);
    
    // Test contact message submission
    const contactData = {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      phone: '0987654321',
      message: 'I would like to learn more about your services'
    };
    
    const contactResponse = await axios.post('http://localhost:3001/api/contact/send', contactData);
    console.log('Contact message response:', contactResponse.data);
    
  } catch (error) {
    console.error('Error testing API:', error.message);
  }
}

testAPI();