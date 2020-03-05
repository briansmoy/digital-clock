var timeToday = new Date();
var getMinutes = timeToday.getMinutes();
var getHour = timeToday.getHours();
var getSeconds = timeToday.getSeconds();
var addZero = "0";

timeToday = getHour + ":" + getMinutes + ":" + getSeconds;

console.log(timeToday);


/*
//Adding leading zero
if (getSeconds < 10) {
    addZero = addZero + getSeconds;
}
else{

}
*/