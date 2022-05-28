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

const hourPanel = function () {
  // !!! ADD IN ALL VARIABLES ABOVE.
  document.getElementById("addInTime").appendChild(divClassHour);
  document.getElementById("addInTime").appendChild(formInline);
  formInline.appendChild(divTimeDisplay);
  formInline.appendChild(inputSection);
  formInline.appendChild(saveTimeButton);
};

var hourAdditions = function () {
  for (var i = 9; i < 18; i++) {
    if (i < 12) {
      let hourAm = i + "am";
      hourPanel();
      console.log(hourAm);
      divIdName = "am" + i;
      divClassHour.setAttribute("id", hourAm);
      divTimeDisplay.innerHTML = hourAm;
    } else if (i == 12) {
      let noon = i + "pm";
      hourPanel();
      console.log(noon);
      divIdName = "pm" + i;
      divClassHour.setAttribute("id", noon);
      divTimeDisplay.innerHTML = noon;
    } else {
      let hourPm = i - 12 + "pm";
      hourPanel();
      console.log(hourPm);
      divIdName = "pm" + i;
      divClassHour.setAttribute("id", hourPm);
      divTimeDisplay.innerHTML = hourPm;
    }
    // document.querySelector("#addInTime").append(hourPanel);
  }
  window.onload = function () {
    hourAdditions;
  };
};
hourAdditions();
console.log(hourPanel());
