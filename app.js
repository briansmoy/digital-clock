let interval = setInterval(displayTime);
let isMilitaryTime = false;

window.onload = function(){
const toggleButton = document.getElementById("toggle-time");
toggleButton.addEventListener('click', function(e){
    isMilitaryTime = !isMilitaryTime;
});
}

function displayTime() {
    var newDate = new Date();
    var hours = newDate.getHours();
    var minutes = newDate.getMinutes();
    var seconds = newDate.getSeconds();
    var getDD = newDate.getDate();
    var getMM = newDate.getMonth();
    var getYYYY = newDate.getFullYear();

    if(isMilitaryTime === true){
        //set variables to 24 hour time
    }else{
        //set varibales to 12 hour time
        hours = (hours % 12) || 12;

        //display 12 when 24%12
        if (hours % 12) {
            hours = hours % 12;
        } else {
            hours = 12;
        }
    }
    
    if(minutes < 10) {
        minutes = "0" + minutes;
    }else{

    }

    if(seconds < 10) {
        seconds = "0" + seconds;
    }else{

    }

    document.getElementById("date").innerHTML = 
        getMM + " / " + getDD + " / " + getYYYY;
    document.getElementById("time").innerHTML = 
        hours + ":" + minutes + ":" + seconds;
}
