var dayCal = document.querySelector("#currentDay");
var pastImp = document.querySelector("#opt1");
var pastImp1 = document.querySelector("#opt2");
var pastImp2 = document.querySelector("#opt3");
var pastImp3 = document.querySelector("#opt4");
var pastImp4 = document.querySelector("#opt5");
var button = document.querySelectorAll(".saveBtn")
var FutureDate = document.querySelector(".future")

console.log(FutureDate);

pastImp.disabled = true;
pastImp1.disabled = true;
pastImp2.disabled = true;
pastImp3.disabled = true;
pastImp4.disabled = true;


var today = new Date();
var dateToday  = "Date: "+(today.getMonth()+1)+"-"+today.getDate()+"-"+today.getFullYear();

dayCal.textContent = dateToday;

// for (var i=0; button.length;i++){
//     button[0].addEventListener("click",function(){
//        // localStorage.setItem("saveDate","hola meco");
//     });
// }