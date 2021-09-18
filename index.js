const timer = document.getElementById("timer");
const start = document.getElementById("start");
const stoptimer = document.getElementById("stop");
const reset = document.getElementById("reset");

let mm = ss= ms= 0;
console.log(timer.innerText);
start.addEventListener('click',()=>{
    start.disabled = true;
    interval = setInterval(() => {
        if(ms == 100){
            ss += 1;
            ms =0;
            timer.innerText = `${mm}:${ss}:${ms}`
        }else{
            timer.innerText = `${mm}:${ss}:${ms}`
            
        }
        ms+=1;
    },10);
});

stoptimer.addEventListener('click',()=>{
    start.disabled = false
    clearInterval(interval)

});

reset.addEventListener('click',()=>{
    mm =ss=ms= 0;
    start.disabled = false
    clearInterval(interval)
    timer.innerText = "00:00:00"
});