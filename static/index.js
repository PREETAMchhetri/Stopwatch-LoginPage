let container = document.getElementById("container");
let start = document.getElementById("start")
let stop = document.getElementById("stop")
let reset = document.getElementById("reset")
let save = document.getElementById("save");



let m =0;
let s = 0;
let ms = 0;

//Starting the Counter
start.addEventListener('click',()=>{
    start.disabled = true;
    
    interval = setInterval(()=>{
        if(ms == 100){
            s = s+1
            container.innerText = `${m}:${s}:${ms}`;
            ms = 0;
        }
        else if(s ==  60){
            m= m+1
            s= ms= 0;
            container.innerText = `${m}:${s}:${ms}`;
            
        }
        else{
          
            container.innerText = `${m}:${s}:${ms}`;

        }
        ms += 1;
    },10)
});


//Stopping the Counter
stop.addEventListener('click',()=>{
    start.disabled = false;
    console.log('stop button pressed');
    clearInterval(interval);
});


//Resetting the Counter
reset.addEventListener('click',()=>{
    s = ms = m = 0;
    start.disabled = false;
    clearInterval(interval)
    container.innerText = "00:00:00";
});



