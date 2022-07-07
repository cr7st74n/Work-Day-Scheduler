var dayCal = document.querySelector("#currentDay");

var today = new Date();

var dateToday  = "Date: "+(today.getMonth()+1)+"-"+today.getDate()+"-"+today.getFullYear();

console.log(dateToday);

dayCal.textContent = dateToday;