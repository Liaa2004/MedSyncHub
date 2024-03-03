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
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var firebaseRef=firebase.database().ref('patient');
    
    document.getElementById('submit').addEventListener('click', function(event) {
      event.preventDefault(); // Prevent form submission
      const fname=document.getElementById('fname').value;
      const bgroup=document.getElementById('bgroup').value;
      const gender=document.getElementById('gender').value;
      const age=document.getElementById('age').value;
      const address = document.getElementById('address').value;
      const phone = document.getElementById('phone').value;
      const email = document.getElementById('email').value;
      const Emergency = document.getElementById('Emergency').value;
      const height = document.getElementById('height').value;
      const weight = document.getElementById('weight').value;
      const medicalHistory = document.getElementById('medicalHistory').value;
        const diagnosis= document.getElementById('diagnosis').value;
        const medical= document.getElementById('medical').value;
        const entry = {
            address:address,
           phone:phone,
            email:email,
            Emergency:Emergency,
            height:height,
            weight:weight,
           medicalHistory:medicalHistory,
            diagnosis:diagnosis,
           medical:medical,
           fname:fname,
           bgroup:bgroup,
           gender:gender,
           age:age,
        };
        firebaseRef.push(entry);
    });