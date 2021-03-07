var displayDate = document.getElementById("currentDay");
var todaysDate = moment().format('dddd MMMM DD, YYYY');
var saveBtn = document.getElementById("save");
var hours = new Date().getHours();
// var hours = moment(hour).format('h');

displayDate.innerHTML = todaysDate;
console.log(hours + "AM");

//changes the color of the planner by the time
$('.input-group').each(function () {
    console.log($('.input-group-text', this).text());
    var currentTime = $('.input-group-text', this).text();
    var timeStampColor = $('.color', this);

    if (currentTime === hours + "AM" || currentTime === hours + "PM") {
        timeStampColor.addClass('present');
    } else if (currentTime < hours + "AM" || currentTime < hours + "PM") {
        timeStampColor.addClass('future');
    } else {
        timeStampColor.addClass('past');
    }});

   
 
