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
  var database = firebase.database();
function getData(){
// Retrieve data from a specific node in the database
var ref = firebase.database().ref('hospital');
ref.on('value', function(snapshot) {

let userexist =false;
if (snapshot.exists()) {
  snapshot.forEach((childSnapshot) => {
      const documentId = childSnapshot.key;
      const username = childSnapshot.child('UserName').val();
      console.log(username);
       if(username===document.getElementById('UserName').value){
        const password = childSnapshot.child('password').val();
        if(password===document.getElementById('password').value){
          window.location.href="dash.html";
        }
        else {
          alert("No documents found.");
        }
       }
       else {
        alert("No documents found.");
      }
  });
} 

});
}


