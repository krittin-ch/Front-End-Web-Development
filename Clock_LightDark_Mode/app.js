const timeEl = document.querySelector(".time")
const btnToggle = document.querySelector(".toggle")

function setTime() {
    const time = new Date()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    console.log(hours + ":" + minutes + ":" + seconds)
    // timeEl.textContent = hours + ":" + minutes + ":" + seconds
    timeEl.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}` // use ` not '  for string interpolation
    // ? and : are used for conditinal (ternary) operator.
    // condition ? expressionIfTrue : expressionIfFalse
}

btnToggle.addEventListener("click", (e)=>{
    console.log("Mode Change")

    const html = document.querySelector("html")
    if(html.classList.contains("dark")) { // If html contains class = "dark"
        html.classList.remove("dark")
        e.target.innerHTML = "Dark Mode"
    } else {
        e.target.innerHTML = "Light Mode"
        html.classList.add("dark")
    }
})

setTime()
setInterval(setTime, 1000)  