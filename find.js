const firebaseConfig = {
  apiKey: "AIzaSyAh-PkgHtQIxb-r1Z-oKPePWcgtr6EM0NQ",
  authDomain: "hosp-769be.firebaseapp.com",
  databaseURL: "https://hosp-769be-default-rtdb.firebaseio.com",
  projectId: "hosp-769be",
  storageBucket: "hosp-769be.appspot.com",
  messagingSenderId: "645680871880",
  appId: "1:645680871880:web:8fc239701d7911de56e8fd",
  measurementId: "G-W8L22XRYDG"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

function getData() {
  var ref = firebase.database().ref('patient');

  ref.on('value', function(snapshot) {
      let userExists = false;

      if (snapshot.exists()) {
          snapshot.forEach((childSnapshot) => {
              const documentId = childSnapshot.key;
              const username = childSnapshot.child('fname').val();
              console.log(username);

              // Assuming 'fname' is the id of an input field
              if (username === document.getElementById('fname').value) {
                  userExists = true;
              }
          });

          if (userExists) {
              alert("Patient information found!");
          } else {
              alert("Patient information not found.");
          }
      } else {
          alert("No patient data in the database.");
      }
  });
}
  