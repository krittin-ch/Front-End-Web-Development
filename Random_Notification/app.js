const messages = [
    "Good Morning",
    "Good Afternoon",
    "Goodnight",
    "Hello World",
    "Hi"
]

const btn = document.querySelector(".btn")
const container = document.querySelector(".container")

function createNotification() {
    const notificationEl = document.createElement("div")
    notificationEl.classList.add("notification")
    notificationEl.innerHTML = randomMessage()
    container.appendChild(notificationEl)

    setTimeout(()=>{
        notificationEl.classList.add("fadeOut")
    }, 800)

    setTimeout(()=>{
        notificationEl.remove()
    }, 800+500)
}

function randomMessage() {
    const notification = Math.floor(Math.random() * messages.length)
    return messages[notification]
}

btn.addEventListener("click", ()=>{
    createNotification()
    console.log(randomMessage())
})
