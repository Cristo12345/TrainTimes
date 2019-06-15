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

    // event listener for submit button
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



    // ADDED PSEUDOCODE OF ALGORITHM FOR "NEXT TRAIN" AND "MINUTES AWAY"
    // if we put this in the DB-childAdded event listener, then the time will only be updated when a child is added
    // might be better to create a function that updates the times every minute

    // ALGORITHM:
    // take frequency of train and first train time from user input
    // take current time when someone visits the page
    // using only these 3 pieces of information we can deduce when the next train is and how many minutes away it is

    // Finding Next Train Time
    // 1. Convert user's firstTrain time to unix to make it a single integer
    // 2. Convert current time (moment()) to unix as well
    // 3. Subtract the first train time from the current time
    // 4. Use modulo (%) to find remainder of result and the frequency of the train. 
    // If there is no remainder, then the train is at the station now. 
    // Else, the next train is (Frequency - remainder) mins away




      // creating new rows for each DB update
      var newRow = $("<tr>").append(
        $("<td>").text(newTrain),
        $("<td>").text(newDestination),
        $("<td>").text(newFrequency),
        $("<td>").text("00:00"),
        $("<td>").text("0"));

      $("#train-table").append(newRow);



  })

