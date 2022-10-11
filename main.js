const stopwatch = document.getElementById('stopwatch');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset')

let elapsedMs = 0;
let state = 0;
let timer_id;
start.addEventListener('click', () => {
    if(state == 0){
    state = 1
    let startMs = Date.now();
    startMs -= elapsedMs;
    timer_id = setInterval(() => {
        const nowMs = Date.now();
        elapsedMs = nowMs - startMs;
        const ms = elapsedMs % 1000
        const s = Math.floor(elapsedMs / 1000) % 60;
        const m = Math.floor(elapsedMs / 1000 / 60) % 60;
        
        const formattedMs = ms.toString().padStart(3, '0');
        const formattedS = s.toString().padStart(2, '0');
        const formattedM = m.toString().padStart(2, '0');
        
        stopwatch.textContent = `${formattedM} : ${formattedS} : ${formattedMs}`
    }, 10);
    };
});

stop.addEventListener('click', () => {
    state = 0;
    clearInterval(timer_id);
    
});

reset.addEventListener('click', () => {
    state = 0;
    clearInterval(timer_id);
    elapsedMs = 0;
    stopwatch.textContent = '00:00:000'
});

