
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAld139_u6V16d1D9XHrsjU7JtV0jiJ4zA",
      authDomain: "kwitter-b0d49.firebaseapp.com",
      projectId: "kwitter-b0d49",
      storageBucket: "kwitter-b0d49.appspot.com",
      messagingSenderId: "448465795546",
      appId: "1:448465795546:web:b6128ab893a2ca93dee8e3"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
