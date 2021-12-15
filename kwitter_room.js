const firebaseConfig = {
    apiKey: "AIzaSyB7wSGycsowjDB6qiFhPNzGyF37XzxpQ3s",
    authDomain: "hacebook-room.firebaseapp.com",
    databaseURL: "https://hacebook-room-default-rtdb.firebaseio.com",
    projectId: "hacebook-room",
    storageBucket: "hacebook-room.appspot.com",
    messagingSenderId: "376074970987",
    appId: "1:376074970987:web:cc1a45d291d5958dcfce2e",
    measurementId: "G-4LZFM3WZGB"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
