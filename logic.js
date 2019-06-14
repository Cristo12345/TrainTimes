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


  // event listener for child being added to DB
  database.ref().on("child_added", function(childAdded) {

    // storing info from DB in variables
      var newTrain = childAdded.val().name;
      var newDestination = childAdded.val().destination;
      var newFrequency = childAdded.val().frequency;

    //MUST ADD ALGORITHM FOR "NEXT TRAIN" AND "MINUTES AWAY"

      // creating new rows for each DB update
      var newRow = $("<tr>").append(
        $("<td>").text(newTrain),
        $("<td>").text(newDestination),
        $("<td>").text(newFrequency),
        $("<td>").text("00:00"),
        $("<td>").text("0"));

      $("#train-table").append(newRow);



  })

