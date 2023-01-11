function logout ()
{
    localstorage.removeItem("User_Name");
    localstorage.removeItem("room_select");
    window.location="index.html";
}

var firebaseConfig = {
    apiKey: "AIzaSyBsk-CsIn8CNOKH8fDyBZWnQWY7wAF8mBo",
    authDomain: "capyo-ed19c.firebaseapp.com",
    databaseURL: "https://capyo-ed19c-default-rtdb.firebaseio.com",
    projectId: "capyo-ed19c",
    storageBucket: "capyo-ed19c.appspot.com",
    messagingSenderId: "34963743491",
    appId: "1:34963743491:web:86f7654f033dc3c758bf36"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("User_Name");
room_name = localStorage.getItem("room_select");

document.getElementById("wel_come").innerHTML="Welcome " + user_name + "to #" + room_name;

function send ()
{
    New_message = document.getElementById("New_msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:New_message,
        like:0
    });

    document.getElementById ("New_msg").value = "";
}

function get_Data ()
{
    firebase.database().ref("/" + room_name).on ("value",function(Snapshot));
}