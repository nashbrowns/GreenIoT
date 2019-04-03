 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyD2FCbB-h1LJ7Q2VEFkj1zzH3LVzf19s_Y",
    authDomain: "greeniot-1c501.firebaseapp.com",
    databaseURL: "https://greeniot-1c501.firebaseio.com",
    projectId: "greeniot-1c501",
    storageBucket: "greeniot-1c501.appspot.com",
    messagingSenderId: "621111645525"
  };
  firebase.initializeApp(config);

  const database = firebase.database();

  let on = false;
  let temp = 0;

  $("#light").on("click", function(event){
      event.preventDefault();
      if (on===false){
      on = true;
      }
      else if (on===true){
          on = false;
      }
      database.ref('Light/').set(on);

      console.log("The light is on: "+ on);
  })

  $("#tempUp").on("click", function(event){
    event.preventDefault();
    if (temp <= 10){
    temp++;
    }
    else if (temp = 10){
    console.log('The temperature is all the way up');
    }
    database.ref('Temp/').set(temp);

    console.log("The temperature is: "+temp);
})

$("#tempDown").on("click", function(event){
    event.preventDefault();
    if (temp <= 10){
    temp--;
    }
    else if (temp = 0){
    console.log('The temperature is all the way down');
    }
    database.ref('Temp/').set(temp);

    console.log("The temperature is: "+temp);
})