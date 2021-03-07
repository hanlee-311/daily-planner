var displayDate = document.getElementById("currentDay");
var todaysDate = moment().format('dddd MMMM DD, YYYY');
var saveBtn = document.getElementById("save");

displayDate.innerHTML = todaysDate;

