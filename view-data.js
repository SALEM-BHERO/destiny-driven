// Script to view all stored data
async function viewStoredData() {
  try {
    console.log('=== Destiny Driven Finance - Stored Data ===\n');
    
    // Get all loan applications
    const loanResponse = await fetch('http://localhost:3001/api/loans/applications');
    const loanData = await loanResponse.json();
    
    console.log('📁 LOAN APPLICATIONS:');
    if (loanData.data && loanData.data.length > 0) {
      loanData.data.forEach((app, index) => {
        console.log(`  ${index + 1}. ${app.firstName} ${app.lastName}`);
        console.log(`     Email: ${app.email}`);
        console.log(`     Phone: ${app.phone}`);
        console.log(`     Loan Type: ${app.loanType}`);
        console.log(`     Submitted: ${app.submittedAt}`);
        console.log(`     Status: ${app.status}`);
        console.log(`     Message: ${app.message || 'No message'}`);
        console.log('');
      });
    } else {
      console.log('  No loan applications found.\n');
    }
    
    // Get all contact messages
    const contactResponse = await fetch('http://localhost:3001/api/contact/messages');
    const contactData = await contactResponse.json();
    
    console.log('📧 CONTACT MESSAGES:');
    if (contactData.data && contactData.data.length > 0) {
      contactData.data.forEach((msg, index) => {
        console.log(`  ${index + 1}. ${msg.firstName} ${msg.lastName}`);
        console.log(`     Email: ${msg.email}`);
        console.log(`     Phone: ${msg.phone}`);
        console.log(`     Submitted: ${msg.submittedAt}`);
        console.log(`     Message: ${msg.message}`);
        console.log('');
      });
    } else {
      console.log('  No contact messages found.\n');
    }
    
    console.log(`📊 SUMMARY:`);
    console.log(`   Total Loan Applications: ${loanData.data ? loanData.data.length : 0}`);
    console.log(`   Total Contact Messages: ${contactData.data ? contactData.data.length : 0}`);
    
  } catch (error) {
    console.error('❌ Error retrieving data:', error.message);
  }
}

// Run the script
viewStoredData();