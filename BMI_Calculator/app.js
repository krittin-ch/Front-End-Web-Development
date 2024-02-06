const Btn = document.querySelector(".btn")

function CalculateBMI() {
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value
    BMI = weight/((height/100)**2)
    return BMI
}

function showBMI() {
    console.log(CalculateBMI())
}

Btn.addEventListener("click", showBMI)