var interval = setInterval(callTwelveTime);

//Functions for onClick button
function onClick12Hour(){
    clearInterval(interval);
    callTwelveTime;
    interval = setInterval(callTwelveTime);
}

function onClick24Hour(){
    clearInterval(interval);
    callTwentyFourTime;
    interval = setInterval(callTwentyFourTime);
}

//12 hour clock function
function callTwelveTime() {
    var timeTwelveToday = new Date();
    var getTwelveHours = timeTwelveToday.getHours();
    var getTwelveMinutes = timeTwelveToday.getMinutes();
    var getTwelveSeconds = timeTwelveToday.getSeconds();
    var getDD = timeTwelveToday.getDate();
    var getMM = timeTwelveToday.getMonth();
    var getYYYY = timeTwelveToday.getFullYear();

    //show 12 when after 24 hour mark
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

    document.getElementById("date").innerHTML = getMM + " / " + getDD + " / " + getYYYY;
    document.getElementById("time").innerHTML = getTwelveHours + ":" + getTwelveMinutes + ":" + getTwelveSeconds;

}
//24 hour clock function
function callTwentyFourTime(){
    var timeDateToday = new Date();
    var showHours = timeDateToday.getHours();
    var showMinutes = timeDateToday.getMinutes();
    var showSeconds = timeDateToday.getSeconds();
    var getDD = timeDateToday.getDate();
    var getMM = timeDateToday.getMonth();
    var getYYYY = timeDateToday.getFullYear();

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
    document.getElementById("date").innerHTML = getMM + " / " + getDD + " / " + getYYYY;
    document.getElementById("time").innerHTML = showHours + ":" + showMinutes + ":" + showSeconds;
}

