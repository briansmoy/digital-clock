var interval = setInterval(callTimeDate, 1000);
//var changeTimeButton = document.getElementById("button");





function callTimeDate(){
    var timeDateToday = new Date();
    var showHours = timeDateToday.getHours();
    var showMinutes = timeDateToday.getMinutes();
    var showSeconds = timeDateToday.getSeconds();
    //var getAmOrPm = ;
    var showTime = showHours + ":" + showMinutes + ":" + showSeconds


    showSeconds = showSeconds > 10 ? "0"+showSeconds : showSeconds;
    
    //Hours convert to military
    if (showHours % 12) {
        showHours = showHours;
    }else{
        showHours = 12;
    }
    //adding zero to minutes
    if (showMinutes < 10) {
        showMinutes = "0" + showMinutes;
    } else {
        showMinutes;
    }
    /*
    //adding zero to seconds
    if (showSeconds < 10) {
        showSeconds = "0" + showSeconds;
    }else{
        showSeconds = showSeconds;
    }
    */
    
    return showTime;

    // Use Ternary Operator
    
    //getHours = getHours ? getHours : 12;
    

    
    //document.getElementById("time").innerHTML = showTime;
}
console.log(callTimeDate());







/* Leaving for idea of creating function for 24 hour time
function changeTime() {
    

    var changeTime = new Date();
    var changeToMilitaryTime = changeTime.getHours() + ":" + changeTime.getMinutes() + ":" + changeTime.getSeconds();
    
    document.getElementById("time").innerHTML = changeToMilitaryTime;
}
*/

