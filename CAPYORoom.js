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

  document.getElementById("wel_come").innerHTML="Welcome " + user_name;

  function addRoom(){

     New_Room = document.getElementById("new_room").value;

    // to create the room in firebase using child().update() with specific room name as child

     firebase.database().ref("/").child(New_Room).update({
           purpose : "Adding Room Name"
     });

    localStorage.setItem("room_select",New_Room);
    window.location="CAPYO_page.html";
            
  }

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
          document.getElementById("trending_rooms").innerHTML = "";
          snapshot.forEach(function(childSnapshot) {
               
          childKey  = childSnapshot.key;
          Room_names = childKey;
    //Start code
          row_room = "<div class='room_name' id = " + Room_names + " onclick='moveTo_room(this.id) ' > #"+ Room_names +"</div> <hr>";

          document.getElementById("trending_rooms").innerHTML =   document.getElementById("trending_rooms").innerHTML + row_room;
    //End code
          });
    });
}
getData();

function  moveTo_room(selected_room){
   
    localStorage.setItem("room_select", selected_room);

    window.location="kwitter_page.html";

}

function  logout(){
   
    localStorage.removeItem("User_Name");
    window.location  = "index.html";
}
