const celsiusInput = document.getElementById("celsius")
const fahrenheitInput = document.getElementById("fahrenheit")
const kelvinInput = document.getElementById("kelvin")
const tempInputs = document.querySelectorAll("input")

tempInputs.forEach(input=>{
    input.addEventListener("input",(e)=>{

        let tempValue = parseInt(e.target.value)
        let inputName = e.target.name

        if (inputName === "") {
            celsiusInput.value = null
            fahrenheitInput.value = null
            kelvinInput.value = null
        }
            
        if (inputName === "celsius") {
            // c -> f
            let f = tempValue*1.8 + 32
            fahrenheitInput.value = f.toFixed(2)
    
            // c -> k
            let k = tempValue + 273
            kelvinInput.value = k.toFixed(2)
        }
    
        if (inputName === "fahrenheit") {
            // f -> c
            let c = (tempValue - 32)/1.8
            celsiusInput.value = c.toFixed(2)
    
            // f -> k
            let k = (tempValue-32)/1.8 + 273
            kelvinInput.value = k.toFixed(2)
        }
    
        if (inputName === "kelvin") {
            // k -> c
            let c = tempValue - 273
            celsiusInput.value = f.toFixed(2)
    
            // k -> f
            let f = (tempValue - 273)*1.8 + 32
            fahrenheitInput.value = f.toFixed(2)
        }
    }
    )

})