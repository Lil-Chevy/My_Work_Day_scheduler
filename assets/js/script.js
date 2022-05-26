var timeSlot =
  'div class="hour"></div>' +
  '<form class="form-inline">' +
  '<div class="col-2 col-md-2 col-xl-2 mb-2"> 9 am </div>' +
  '<input class="col-8 col-md-8 col-xl-8 me-3 time-block row" type="text"></input>' +
  '<button class="col-2 col-md-2 col-xl-2 mb-2 saveBtn row" type="submit" id="saveButton">Save Button</button>' +
  "</div>" +
  "</form";
// make div for js 2
var divClassHour = document.createElement("div");
divClassHour.classList.add("hour");
// create form element line 3.
var FormClassFormInLine = document.createElement("form");
FormClassFormInLine.classList.add("form-inline");
//create div  with class for bootstrap line 4.
var divBootStrap = document.createElement("div");
divBootStrap.classList.add("col-2", "col-md-2", "col-xl-2", "mb-2");
divBootStrap.innerHTML = "9am";
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
// TODO!!!!need to add types for inputSection

var containerDiv = document.querySelector(".container");
// dynamically appending hours to DOM

function hourPanels() {
  //   var timeCard = containerDiv.append(timeSlot);
  document.getElementById("addInTime").appendChild(divClassHour);
  divClassHour.appendChild(FormClassFormInLine);
  FormClassFormInLine.appendChild(divBootStrap);
  divBootStrap.appendChild(inputSection);
}
hourPanels(divClassHour);
