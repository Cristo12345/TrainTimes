// config firebase
var firebaseConfig = {
    apiKey: "AIzaSyAICF2gaCBoGg81zfsXyMpQGtyhyMCgGlM",
    authDomain: "traintimes-6097f.firebaseapp.com",
    databaseURL: "https://traintimes-6097f.firebaseio.com",
    projectId: "traintimes-6097f",
    storageBucket: "traintimes-6097f.appspot.com",
    messagingSenderId: "275619897474",
    appId: "1:275619897474:web:c3feaf2d373e3e6b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // set database to a variable for convienience 
  var database = firebase.database();

  // Initial values
  var trainName = '';
  var trainDestination = '';
  var firstTrain = '';
  var trainFrequency = '';
  var trainNext = '';
  var minutesAway = 0;

    // event listener  for submit button
  $("#add-train-btn").on("click", function(event) {

    // prevent page from reloading on click
    event.preventDefault();

    // taking values from user input
    trainName = $("#train-name-input").val().trim();
    trainDestination = $("#destination-input").val().trim();
    firstTrain = $("#start-input").val().trim();
    trainFrequency = $("#frequency-input").val().trim();

    database.ref().push({
        name: trainName,
        destination: trainDestination,
        firstTrain: firstTrain,
        trainFrequency: trainFrequency
    })

    alert("train added");

    $("#name-input").val("");
    $("#destination-input").val("");
    $("#start-input").val("");
    $("#frequency-input").val("");


  })

