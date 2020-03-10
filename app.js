var interval = setInterval(callTimeDate, 1000);
//var changeTimeButton = document.getElementById("button");

function callTimeDate(){
    var timeDateToday = new Date();
    var showHours = timeDateToday.getHours();
    var showMinutes = timeDateToday.getMinutes();
    var showSeconds = timeDateToday.getSeconds();
    var showTime = showHours + ":" + showMinutes + ":" + showSeconds;

    //Hours convert to military
    if (showHours % 12) {
        showHours = showHours;
    } else {
        showHours = 12;
    }
    //adding zero to minutes
    if (showMinutes < 10) {
        showMinutes = "0" + showMinutes;
    } else {
        //showMinutes;
    }

    //adding zero to seconds
    if (showSeconds < 10) {
        showSeconds = "0" + showSeconds;
    } else {
        
    }

    document.getElementById("time").innerHTML = showTime;
    //document.getElementById("date").innerHTML = showDate;

}


