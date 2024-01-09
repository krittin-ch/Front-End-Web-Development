const Input = document.querySelector("input")
const Num = document.querySelector(".num")
const Arr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]

Input.addEventListener("keyup", ()=>{
    let res = 0
    for (let i =0; i<Input.value.length; i++) {
        // if (Arr.includes(Input.value[i])) {
        if (Input.value[i].match(/([a,e,i,o,u,A<E<I<O<U])/)) {
            res += 1
        }
    }
    Num.textContent = `${res}`
})