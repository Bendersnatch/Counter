let count = 0

const countEl = document.getElementById("count-el")
const refreshEl = document.getElementById("refresh-el")
const incrementBtn = document.getElementById("increment-btn")
const decrementBtn = document.getElementById("decrement-btn")
const refreshBtn = document.getElementById("refresh-btn")

incrementBtn.addEventListener("click", increment)
decrementBtn.addEventListener("click", decrement)
refreshBtn.addEventListener("click", save)
function increment() {
    count++
    updateCounter()
}

function decrement() {
    count--
    updateCounter()
}

function updateCounter() {
    countEl.textContent = count

    countEl.style.transform = "scale(1.15)"
    setTimeout(() => countEl.style.transform = "scale(1)", 150)

    if (count > 0) countEl.style.color = "#3ddc84"
    else if (count < 0) countEl.style.color = "#ff4d4d"
    else countEl.style.color = "#fff"
}

function save() {
    count = 0
    updateCounter()
}

