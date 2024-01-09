window.onscroll=()=>scrollProgress() // If window detect scroll, scrollProgress will be activated

const progressEl = document.querySelector(".progress")

function scrollProgress() {
    // from 0 to 1
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop
    const scrollPercentage = scrollTop/pageHeight * 100
    progressEl.style.visibility = "visible"
    progressEl.style.width = scrollPercentage+"%";
}