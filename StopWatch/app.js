const startBtn = document.querySelector(".start")
const pauseBtn = document.querySelector(".pause")
const resetBtn = document.querySelector(".reset")

const timeEl = document.querySelector(".time")

let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0]
let timer = null

startBtn.addEventListener("click", startTimer)
pauseBtn.addEventListener("click", pauseTimer)
resetBtn.addEventListener("click", resetTimer)

function startTimer() {
    if (timer!=null) {
        clearInterval(timer)
    }   
    timer = setInterval(displayTime, 10)
}

function pauseTimer() {
    clearInterval(timer)
}

function resetTimer() {
    clearInterval(timer)
    timeEl.innerHTML = "00:00:00:000"
}

function displayTime() {
    milliseconds += 10
    if (milliseconds == 1000) {
        milliseconds = 0
        seconds++
        if (seconds == 60) {
            seconds = 0
            minutes++
            if (minutes == 60) {
                minutes = 0
                hours++
            }
        }
    }
    timeEl.innerHTML = `${hours<10 ? `0${hours}` : `${hours}`}:${minutes<10 ? `0${minutes}` : `${minutes}`}:${seconds<10 ? `0${seconds}` : `${seconds}`}:${milliseconds<10 ? `00${milliseconds}` : milliseconds<100 ? `0${milliseconds}` : `${milliseconds}`}`
}