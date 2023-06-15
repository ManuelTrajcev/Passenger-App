// // document.getElementById("count-el").innerText = 5

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0

function increment() {
    count++
    countEl.innerText = count

}

function save() {
    saveEl.textContent += count + "-"
    countEl.textContent = 0
    count = 0
}


