const eye = document.querySelector("#eye")
const passwordEl = document.querySelector("#password")

eye.addEventListener("click", (e)=>{
    if (eye.classList.contains("fa-eye")) {
        eye.classList.replace("fa-eye", "fa-eye-slash")
        passwordEl.type = "text"
    } else if (eye.classList.contains("fa-eye-slash")) {
        eye.classList.replace("fa-eye-slash", "fa-eye")
        passwordEl.type = "password"
    }
})