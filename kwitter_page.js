//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCQgNqGGMUkAlfvbKou_9oUaIAGvEK977w",
      authDomain: "kwitter-ce9b7.firebaseapp.com",
      databaseURL: "https://kwitter-ce9b7-default-rtdb.firebaseio.com",
      projectId: "kwitter-ce9b7",
      storageBucket: "kwitter-ce9b7.appspot.com",
      messagingSenderId: "26032158702",
      appId: "1:26032158702:web:c88e476571edce7a5e80ff"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send()
 { 
       msg = document.getElementById("msg").value; 
       firebase.database().ref(room_name).push(
             {
              name:user_name, 
              message:msg,
               like:0 
            }
               ); 
               document.getElementById("msg").value = "";
             }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
      
}