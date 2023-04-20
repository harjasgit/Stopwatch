const btnstatus = (status) =>{
    if(status == "stopped"){
        document.getElementById("startbtn").style.display = "block";
        document.getElementById("stopbtn").style.display = "none";
        document.getElementById("resetbtn").style.display = "none";
    }
    else if(status == "running"){
        document.getElementById("startbtn").style.display = "none";
        document.getElementById("stopbtn").style.display = "block";
        document.getElementById("resetbtn").style.display = "block";
    }
    else if(status == "continue"){
        document.getElementById("startbtn").style.display = "block";
        document.getElementById("stopbtn").style.display = "none";
        document.getElementById("resetbtn").style.display = "block";
    }
}



let time = {
    min: 0,
    sec: 0,
    ms: 0
}


let min = document.getElementById("min");
let sec = document.getElementById("sec");
let ms = document.getElementById("ms");



const start = ()=>{
   btnstatus("running");

   starttimer = setInterval(()=>{
    time.ms++;

    if(time.ms == 100){
        time.ms = 00;
        time.sec++;
    }
    if (time.sec == 60){
        time.sec = 00;
        time.min++;
    }
    if(time.min == 60){
        time.min = 00;
        // reset 
    }

   
    ms.innerHTML = time.ms;
    sec.innerHTML = time.sec;
    min.innerHTML = time.min;

    if(time.min < 10){
        min.innerHTML = "0" + time.min;
    }
    if(time.sec < 10){
        sec.innerHTML = "0" + time.sec;
    }
    if(time.ms < 10){
        ms.innerHTML = "0" + time.ms;
    }
   },10)

}

const stop = ()=>{
    clearInterval(starttimer);
    btnstatus("continue");
}
const reset = ()=>{
    stop();
    time.min = 0;
    time.sec = 0;
    time.ms = 0;

    ms.innerHTML = "00";
    sec.innerHTML = "00";
    min.innerHTML = "00";
    btnstatus("stopped");
}

btnstatus("stopped");