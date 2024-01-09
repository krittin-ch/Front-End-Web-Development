const btn = document.querySelector(".btn")
const coupon = document.querySelector(".coupon")

btn.addEventListener("click", (e)=>{
    coupon.select()
    coupon.setSelectionRange(0, 9999)
    navigator.clipboard.writeText(coupon.value)
    btn.textContent = "Copied"
    console.log("COPIED")
    setTimeout(()=>{
        btn.textContent = "Copy"
    }, 3000)
})






// const btn = document.querySelector(".btn") // Reference variable btn to btn class
// const coupon = document.querySelector(".coupon")

// btn.addEventListener("click", (e)=>{
//     coupon.select() // When click botton will choose the value from coupon
//     coupon.setSelectionRange(0, 3) // Select the selectoin range (first letter to n-th letter (in this case from 0 to 999))
//     navigator.clipboard.writeText(coupon.value)
//     btn.textContent="คัดลอกลูปองแล้ว"
//     setTimeout(()=>{ // Just change the text on botton (does notchange its function)
//         btn.textContent="คัดลอก"
//     }, 3000) // 3000 ms
// })