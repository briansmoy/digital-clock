var interval = setInterval(callTimeDate, 1000);
//var changeTimeButton = document.getElementById("button");

function callTimeDate(){
    var timeDateToday = new Date();
    var showHours = timeDateToday.getHours();
    var showMinutes = timeDateToday.getMinutes();
    var showSeconds = timeDateToday.getSeconds();
    
    //adding zero to minutes
    if (showMinutes < 10) {
        showMinutes = "0" + showMinutes;
    } else {
        showMinutes;
    }

    //adding zero to seconds
    if (showSeconds < 10) {
        showSeconds = "0" + showSeconds;
    } else {
        showSeconds;
    }

    document.getElementById("time").innerHTML = showHours + ":" + showMinutes + ":" + showSeconds;;
    //document.getElementById("date").innerHTML = showDate;

}





/*Work on later - Convert 12 hour format to 24

//convert hours from 24 to 12
showHours = (showHours % 12) || 12;

//display 12 when 24%12
    if (showHours % 12) {
        showHours = showHours % 12;
    } else {
        showHours = 12;
    }
*/