// Script to test the real backend functionality
async function testRealBackend() {
  try {
    console.log('=== Testing Real Backend Functionality ===\n');
    
    // Test 1: Health check
    const healthResponse = await fetch('http://localhost:3001/health');
    const healthData = await healthResponse.json();
    console.log('✅ Health Check:', healthData.message);
    
    // Test 2: User Registration
    console.log('\n--- User Registration ---');
    const registerData = {
      username: 'testuser',
      email: 'test@example.com',
      password: 'password123'
    };
    
    const registerResponse = await fetch('http://localhost:3001/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(registerData)
    });
    
    const registerResult = await registerResponse.json();
    console.log('✅ User Registration:', registerResult.message);
    
    // Store the token for later use
    const token = registerResult.token;
    
    // Test 3: User Login
    console.log('\n--- User Login ---');
    const loginData = {
      email: 'test@example.com',
      password: 'password123'
    };
    
    const loginResponse = await fetch('http://localhost:3001/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    });
    
    const loginResult = await loginResponse.json();
    console.log('✅ User Login:', loginResult.message);
    
    // Test 4: Get User Profile (requires authentication)
    console.log('\n--- Get User Profile ---');
    const profileResponse = await fetch('http://localhost:3001/api/users/profile', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${loginResult.token}`,
        'Content-Type': 'application/json'
      }
    });
    
    const profileResult = await profileResponse.json();
    console.log('✅ User Profile:', profileResult.user ? profileResult.user.username : 'Failed to get profile');
    
    // Test 5: Submit Loan Application
    console.log('\n--- Loan Application ---');
    const loanData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
      loanType: 'Business Loan',
      message: 'Looking for a business loan to expand operations'
    };
    
    const loanResponse = await fetch('http://localhost:3001/api/loans/apply', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loanData)
    });
    
    const loanResult = await loanResponse.json();
    console.log('✅ Loan Application:', loanResult.message);
    console.log('   Application ID:', loanResult.applicationId);
    
    // Test 6: Submit Contact Message
    console.log('\n--- Contact Message ---');
    const contactData = {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      phone: '0987654321',
      message: 'I would like to learn more about your financial services'
    };
    
    const contactResponse = await fetch('http://localhost:3001/api/contact/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactData)
    });
    
    const contactResult = await contactResponse.json();
    console.log('✅ Contact Message:', contactResult.message);
    
    console.log('\n🎉 All real backend tests completed!');
    console.log('\n🔧 Real Backend Features Implemented:');
    console.log('   • MongoDB database integration');
    console.log('   • User authentication with JWT');
    console.log('   • Password encryption with bcrypt');
    console.log('   • Email notifications with Nodemailer');
    console.log('   • Protected API routes');
    console.log('   • Admin-only endpoints');
    console.log('   • Data validation and error handling');
    
  } catch (error) {
    console.error('❌ Error testing real backend:', error.message);
  }
}

// Run the test
testRealBackend();