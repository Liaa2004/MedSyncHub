var firebaseConfig = {
    apiKey: "AIzaSyAh-PkgHtQIxb-r1Z-oKPePWcgtr6EM0NQ",
    authDomain: "hosp-769be.firebaseapp.com",
    databaseURL: "https://hosp-769be-default-rtdb.firebaseio.com",
  projectId: "hosp-769be",
    storageBucket: "hosp-769be.appspot.com",
    messagingSenderId: "645680871880",
    appId: "1:645680871880:web:0aa50c9f352718b356e8fd",
    measurementId: "G-Y3PXC3ZCR3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var firebaseRef=firebase.database().ref('hospital');
    
    document.getElementById('submit').addEventListener('click', function(event) {
      event.preventDefault(); // Prevent form submission
  
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const dateOfBirth = document.getElementById('dateOfBirth').value;
      const email = document.getElementById('email').value;
      const phoneNumber = document.getElementById('phoneNumber').value;
      const address = document.getElementById('address').value;
      const hospital = document.getElementById('hospital').value;
      const Specialisation = document.getElementById('Specialisation').value;
      const UserName = document.getElementById('UserName').value;
      const password = document.getElementById('password').value;
      const cpassword = document.getElementById('cpassword').value;
  
      const username = document.getElementById('UserName').value;
      const confirmPassword = document.getElementById('cpassword').value;
  
      if (password === confirmPassword) {
          // Check if the username already exists in the database
          firebase.database().ref('usernames').orderByChild('username').equalTo(username).once('value', function(snapshot) {
              if (snapshot.exists()) {
                  // Username already exists
                  document.getElementById('submit').disabled = true;
                  document.getElementById('passwordError').innerText = 'Username already exists. Please choose another one.';
              } else {
                  // Username does not exist
                  // Store data in the Firebase database
                  const entry = {
                      firstName: firstName,
                      lastName: lastName,
                      dateOfBirth: dateOfBirth,
                      email: email,
                      phoneNumber: phoneNumber,
                      address: address,
                      hospital: hospital,
                      Specialisation: Specialisation,
                      UserName: UserName,
                      password: password,
                      cpassword: cpassword
                  };
                  firebaseRef.push(entry);
                  window.location.href="index.html";
              }
          });
      } else {
          document.getElementById('passwordError').innerText = 'Passwords do not match.';
      }
  });