
   
      
      document.getElementById('submit').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission
        
        const username = document.getElementById('UserName').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('cpassword').value;
        
        if (password === confirmPassword) {
            // Check if the username already exists in the database
            database.ref('usernames').orderByChild('username').equalTo(username).once('value', function(snapshot) {
                if (snapshot.exists()) {
                    // Username already exists
                    document.getElementById('submit').disabled = true;
                    document.getElementById('passwordError').innerText = 'Username already exists. Please choose another one.';
                } else {
                    // Username does not exist
                    document.getElementById('registrationForm').submit(); // Submit the form
                }
            });
        } else {
            document.getElementById('passwordError').innerText = 'Passwords do not match.';
        }
    });

