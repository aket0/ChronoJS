
 let timer;
 let timeValue = 0;

let current = document.getElementById("main")
let frame = document.createElement("fieldset");
frame.style.width = "100px";
frame.style.display = "flex";
frame.style.flexDirection = "column"
frame.style.padding = "15px"
frame.style.justifyContent = "center"
frame.style.borderRadius = "15px"
frame.style.height = "100px"
current.appendChild(frame)
let title = document.createElement("legend")
title.innerText = "Mon chrono";
title.style.textAlign = "center";
frame.appendChild(title);
let divBtn = document.createElement("div")
frame.appendChild(divBtn)
divBtn.style.display = "flex";
divBtn.style.flexDirection = "row"
divBtn.style.justifyContent = "space-evenly"
let btnStart = document.createElement("button")
btnStart.innerText = "start";
divBtn.appendChild(btnStart);
let btnPause = document.createElement("button")
btnPause.innerText = "pause";
divBtn.appendChild(btnPause);
let btnStop = document.createElement("button")
btnStop.innerText = "stop";
divBtn.appendChild(btnStop);
let divSpan = document.createElement("div")
frame.appendChild(divSpan)
divSpan.style.display = "flex";
divSpan.style.flexDirection = "row";
divSpan.style.justifyContent = "center";
divSpan.style.marginTop = "10%"
let span = document.createElement("span");
span.innerHTML = "00:00:00"
btnPause.style.display = "none";
btnStop.style.display = "none"
divSpan.appendChild(span);


function ajouteUnZero(number){
    
    if(number < 10){

    number = "0" + number;
    }    
    return number;
    }


function updateTimer() {

    var seconds = Math.round(timeValue);
    var hours = parseInt (seconds / 3600);
    var minutes = parseInt (seconds / 60);
    seconds = seconds % 60;
    span.innerHTML = ajouteUnZero(hours)
        +":"+ajouteUnZero(minutes)
        +":"+ajouteUnZero(seconds)
    timeValue += 1;

}


btnStart.addEventListener("click", function () {
    timer = setInterval(updateTimer, 1000);
    btnStart.style.display = "none";
    btnStop.style.display = "inline";
    btnPause.style.display = "inline";
    divBtn.style.display = "flex";
    divBtn.style.flexDirection = "row"
    divBtn.style.justifyContent = "space-between"
    span.style.color = "green"

});

btnPause.addEventListener("click", function () {
    btnPause.style.display = "none"
    btnStart.style.display = "inline"
    btnStart.innerHTML = "reprendre"
    btnStart.style.marginRight = "5px"
    span.style.color = "blue"
    clearInterval(timer);

});

btnStop.addEventListener("click", function () {
    clearInterval(timer);
    timeValue = 0;
    updateTimer()
    btnStop.style.display = "none";
    btnPause.style.display = "none";
    btnStart.style.display = "inline"
    btnStart.innerText = "start"
    divBtn.style.display = "flex";
    divBtn.style.flexDirection = "row"
    divBtn.style.justifyContent = "center"
    span.style.color = "black"

});

