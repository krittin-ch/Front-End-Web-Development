const Btn = document.querySelector(".btn")
const result = document.querySelector(".result")

function CalculateBMI() {
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value
    BMI = weight/((height/100)**2)
    return BMI
}

function showResult(bmi, messege, color) {
    result.style.backgroundColor = color
    return result.innerHTML = `Result: BMI = ${bmi} (${messege})`
}

function showBMI() {
    if (weight === "" || isNaN(weight)) {
        return result.innerHTML = "Please Enter Your Weight"
    } else if (height === "" || isNaN(height)) {
        return result.innerHTML = "Please Enter Your Height"
    } else {
        if (BMI < 18.5) {
            showResult(BMI, "Underweight", "cyan")
        } else if (BMI >= 18.5 && BMI < 25) {
            showResult(BMI, "Normal", "green")
        } else if (BMI >= 25 && BMI < 30) {
            showResult(BMI, "Overweight", "yellow")
        } else if (BMI >= 30 && BMI < 35) {
            showResult(BMI, "Obese", "orange")
        } else {
            showResult(BMI, "Extremly Obese", "red")
        }
    }
}


Btn.addEventListener("click", showBMI)