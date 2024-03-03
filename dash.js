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
    firebase.initializeApp(firebaseConfig);
    var database = firebase.database();
    var ref = firebase.database().ref('patient');

