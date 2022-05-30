// make div for js 2;
var divClassHour = document.createElement("div");
divClassHour.classList.add("hour");
// create form element line 3.
var divTimeDisplay = document.createElement("div");
divTimeDisplay.classList.add("col-2", "col-md-2", "col-xl-2", "mb-2");

var timeArray = [];
// time id input information

const hourPanel = function (timeSlot) {
  var divClassHour = document.createElement("div");
  divClassHour.classList.add("hour");
  // create form element line 3.
  var formInline = document.createElement("form");
  formInline.classList.add("form-inline");
  //create div  with class for bootstrap line 4.
  var divTimeDisplay = document.createElement("div");
  divTimeDisplay.classList.add("col-2", "col-md-2", "col-xl-2", "mb-2");

  // var input section line 5.
  var inputSection = document.createElement("input");
  inputSection.classList.add(
    "col-8",
    "col-md-8",
    "col-xl-8",
    "me-3",
    "time-block",
    "row"
  );
  inputSection.setAttribute("id", "input-" + timeSlot.id);

  // add type to inputSection of text.
  inputSection.setAttribute("type", "text");
  // add button line 6
  var saveTimeButton = document.createElement("button");
  saveTimeButton.classList.add(
    "col-2",
    "col-md-2",
    "col-xl-2",
    "mb-2",
    "saveBtn",
    "row"
  );
  saveTimeButton.innerHTML = "Save Button";
  saveTimeButton.setAttribute("type", "button");
  saveTimeButton.addEventListener("click", function () {
    clickHandlerSaveButton(timeSlot.id);
  });
  // dynamically appending hours to DOM
  document.getElementById("addInTime").appendChild(divClassHour);
  document.getElementById("addInTime").appendChild(formInline);
  divTimeDisplay.innerHTML = timeSlot.time;
  formInline.appendChild(divTimeDisplay);
  formInline.appendChild(inputSection);
  formInline.appendChild(saveTimeButton);
};

function hourAdditions() {
  for (var i = 9; i < 18; i++) {
    // time,id,variable for user input
    var timeSlot = {};
    timeSlot.id = i;
    timeSlot.scheduledEvent = "";
    console.log(timeSlot);
    if (i < 12) {
      let hourAm = i + "am";
      console.log(hourAm);
      timeSlot.time = hourAm;

      // fuck off for now
    } else if (i == 12) {
      let noon = i + "pm";
      console.log(noon);
      timeSlot.time = noon;
    } else {
      let hourPm = i - 12 + "pm";

      console.log(hourPm);
      timeSlot.time = hourPm;
    }
    hourPanel(timeSlot);
    timeArray.push(timeSlot);
  }
}
hourAdditions();

console.log(timeArray);

function clickHandlerSaveButton(id) {
  // take in id
  const inputData = document.getElementById("input-" + id).value;
  console.log(inputData);
  // update timeArray with new information
  // persist entire array into local storage
}

// on start check local storage to see if it exists
// if the time array does exist, use that to create the elements instead hourAdditions call hour panel for each array
