var displayDate = document.getElementById("currentDay");
var todaysDate = moment().format('dddd MMMM DD, YYYY');
var saveBtn = document.getElementById("save");
var hours = new Date().getHours();
var hour = JSON.stringify(hours);

displayDate.innerHTML = todaysDate;
console.log(hours + " hour");

//changes the color of the planner by the time
$('.input-group').each(function () {
    console.log($('.input-group-text', this).text() );
    var currentTime = $('.input-group-text', this).text();
    var timeStampColor = $('.color', this);

    if (currentTime === hour) {
        console.log("present");
        timeStampColor.addClass('present');
    } else if (currentTime < hour) {
        console.log("past")
        timeStampColor.addClass('past');
    } else {
        console.log("future")
        timeStampColor.addClass('future');
    }});

   
 
