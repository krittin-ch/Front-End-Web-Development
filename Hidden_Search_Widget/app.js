const search = document.querySelector(".search")
const btn = document.querySelector(".btn")
const input = document.querySelector(".input")
const cancel = document.querySelector(".cancel")

btn.addEventListener("click", ()=>{
    search.classList.add("active")
    cancel.classList.add("apply")
    input.focus()
})

cancel.addEventListener("click", ()=>{
    search.classList.remove("active")
    cancel.classList.remove("apply")
})

