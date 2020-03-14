//var interval = setInterval(callTwelveTime, 1000);
//var changeTimeButton = document.getElementById("button");

//Functions for onClick button
function onClick12Hour(){
    //clearInterval(interval, 1000);
    setInterval(callTwelveTime, 1000);
    console.log("12 hour button");
}

function onClick24Hour(){
    //clearInterval(interval, 1000);
    setInterval(callTimeDate, 1000);
    console.log("24 hour button");
}

//12 hour clock function
function callTwelveTime() {
    var timeTwelveToday = new Date();
    var getTwelveHours = timeTwelveToday.getHours();
    var getTwelveMinutes = timeTwelveToday.getMinutes();
    var getTwelveSeconds = timeTwelveToday.getSeconds();

    //convert hours from 24 to 12
    getTwelveHours = (getTwelveHours % 12) || 12;

    //display 12 when 24%12
    if (getTwelveHours % 12) {
        getTwelveHours = getTwelveHours % 12;
    } else {
        getTwelveHours = 12;
    }

    if(getTwelveMinutes < 10) {
        getTwelveMinutes = "0" + getTwelveMinutes;
    }else{

    }

    if(getTwelveSeconds < 10) {
        getTwelveSeconds = "0" + getTwelveSeconds;
    }else{

    }

    document.getElementById("time").innerHTML = getTwelveHours + ":" + getTwelveMinutes + ":" + getTwelveSeconds;
}
//24 hour clock function
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
