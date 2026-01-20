let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let incrementBtn = document.getElementById("increment-btn")
let saveBtn = document.getElementById("save-btn")

let count = 0

incrementBtn.addEventListener("click", increment)
saveBtn.addEventListener("click", save)

function increment() {
    count++
    countEl.textContent = count
}

function save() {
    saveEl.textContent += count + " - "
    count = 0
    countEl.textContent = count
}
