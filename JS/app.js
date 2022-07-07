var dayCal = document.querySelector("#currentDay");
var pastImp = document.querySelector("#opt1");
var pastImp1 = document.querySelector("#opt2");
var pastImp2 = document.querySelector("#opt3");
var pastImp3 = document.querySelector("#opt4");
var pastImp4 = document.querySelector("#opt5");

var future1 = document.querySelectorAll(".future");
var button = document.querySelectorAll(".saveBtn");


button[5].addEventListener("click", function(event){
    event.preventDefault();
    future1[0].textContent = future1[0].value;
    saveData(future1[0]);
    getData();
});
function saveData(data){
    localStorage.setItem("date",JSON.stringify(data.value));
}

function getData(){
    var GetDate = localStorage.getItem("date");
    if( GetDate !==null){
        future1[0].value = GetDate;
    }else{
        return;
    }
    console.log(future1[0]);
}



button[6].addEventListener("click", function(){
    future1[1].textContent = future1[1].value;
    console.log(future1[1]);
    saveData(future1[1]);

});

button[7].addEventListener("click", function(){
    future1[2].textContent = future1[2].value;
    console.log(future1[2]);
    saveData(future1[2]);
});
button[8].addEventListener("click", function(){
    future1[3].textContent = future1[3].value;
    console.log(future1[3]);
    saveData(future1[3]);
});





pastImp.disabled = true;
pastImp1.disabled = true;
pastImp2.disabled = true;
pastImp3.disabled = true;
pastImp4.disabled = true;


var today = new Date();
var dateToday  = "Date: "+(today.getMonth()+1)+"-"+today.getDate()+"-"+today.getFullYear();

dayCal.textContent = dateToday;

// for (var i=0; button.length;i++){
//     button[i].addEventListener("click",function(){
//         future1[i].textContent = future1[i].value;
//         console.log(future1[i]);
//     });
// }
function init(){
    getData();
}

init();


