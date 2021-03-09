//Refreshes page for the next day
function clearActivities () {
    window.localStorage.removeItem('9');
    window.localStorage.removeItem('10');
    window.localStorage.removeItem('11');
    window.localStorage.removeItem('12');
    window.localStorage.removeItem('13');
    window.localStorage.removeItem('14');
    window.localStorage.removeItem('15');
    window.localStorage.removeItem('16');
    window.localStorage.removeItem('17');
};

//Updates date and colors by set interval
$(document).ready(function() {
function hourUpdater () {
var displayDate = document.getElementById("currentDay");
var todaysDate = moment().format('dddd MMMM DD, YYYY');

//Displays today's date in jumnotron
displayDate.innerHTML = todaysDate;

//changes the color of the planner by the time
$('.input-group').each(function () {
    var currentTime = $('.input-group-text', this).attr('id');
    var hours = new Date().getHours();
    var timeStampColor = $('.color', this);

    if (currentTime == hours) {
        timeStampColor.addClass('present');
        timeStampColor.removeClass('future');
        timeStampColor.removeClass('past');
    } else if (currentTime > hours) {
        timeStampColor.addClass('future');
        timeStampColor.removeClass('past');
        timeStampColor.removeClass('present');
    } else {
        timeStampColor.addClass('past');
        timeStampColor.removeClass('present');
        timeStampColor.removeClass('future');
    };
})

//Checks to see if the day changed    
if (localStorage.getItem('day') !== null) {
    var currentDay = moment().format('DD');
    var previousDay = localStorage.getItem('day');
    
    if (currentDay !== previousDay) {
        clearActivities();
        window.localStorage.removeItem('day');
    } else {
        return;
    }
}};

setInterval(hourUpdater, 15000);

hourUpdater();

//Populate text area from local storage
$('#hour-9 .form-control').val(localStorage.getItem('9'));
$('#hour-10 .form-control').val(localStorage.getItem('10'));
$('#hour-11 .form-control').val(localStorage.getItem('11'));
$('#hour-12 .form-control').val(localStorage.getItem('12'));
$('#hour-13 .form-control').val(localStorage.getItem('13'));
$('#hour-14 .form-control').val(localStorage.getItem('14'));
$('#hour-15 .form-control').val(localStorage.getItem('15'));
$('#hour-16 .form-control').val(localStorage.getItem('16'));
$('#hour-17 .form-control').val(localStorage.getItem('17'));

//Button Listener
$('.saveBtn').on('click', function () {
    var activity = $(this).siblings('.form-control').val().trim();
    var hour = $(this).siblings('.input-group-text').attr('id');
    var currentDay = moment().format('DD');
    
    localStorage.setItem(hour, activity);

    if (localStorage.getItem('day') == null) {
        localStorage.setItem('day', currentDay);
    }
})
});