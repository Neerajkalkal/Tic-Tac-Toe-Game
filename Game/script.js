let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
let newBtn = document.querySelector("#new-btn")

let turnO = true // player X , player y

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O"
            turnO = false
        } else {
            box.innerText = "X"
            turnO = true
        }
        box.disabled = true
        checkWin()
    })
})
const disbBtn = () => {
    for (let box of boxes) {
        box.disabled = true
    }
}
const enableBtn = () => {
    for (let box of boxes) {
        box.disabled = false
        box.innerText = ""
    }
}
const showWiner = (winner) => {
    msg.innerText = `winner ${winner}`
    msgContainer.classList.remove('hide')
    disbBtn();
}
const checkWin = () => {
    for (let patter of winPatterns) {
        let pos1val = boxes[patter[0]].innerText
        let pos2val = boxes[patter[1]].innerText
        let pos3val = boxes[patter[2]].innerText
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val == pos2val && pos1val == pos3val) {
                showWiner(pos1val);
            }
        }
    }
}

const resetGame = () => {
    turnO = true
    enableBtn()
    msgContainer.classList.add("hide")
}

newBtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame)