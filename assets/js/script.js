// add container to hold it all.
var divContainer = document.getElementById(addInTime);

// make div for js 2
var divClassHour = document.createElement("div");
divClassHour.classList.add("hour");
// create form element line 3.
var formInline = document.createElement("form");
formInline.classList.add("form-inline");
//create div  with class for bootstrap line 4.
var divTimeDisplay = document.createElement("div");
divTimeDisplay.classList.add("col-2", "col-md-2", "col-xl-2", "mb-2");
divTimeDisplay.innerHTML = "9am";

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

var containerDiv = document.querySelector(".container");
// dynamically appending hours to DOM

var hourPanels = function () {
  document.getElementById("addInTime").appendChild(divClassHour);
  document.getElementById("addInTime").appendChild(formInline);
  formInline.appendChild(divTimeDisplay);
  formInline.appendChild(inputSection);
  formInline.appendChild(saveTimeButton);
};
hourPanels();

var hourAdditions = function () {
  for (var i = 9; i < 18; i++) {
    if (i < 12) {
      console.log(i, "am");
    }
    if (i >= 12) {
      console.log(i, "pm");
    }
  }
};
hourAdditions();
