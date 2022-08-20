const formElement = document.querySelector(".form")
const loginElement = document.querySelector(".login")
const inputElement = document.querySelector(".input")
const nav_listElement = document.querySelector(".nav_list")
loginElement.onclick = function (event) {
    const liElement = document.createElement("li")
    liElement.textContent = inputElement.value
    nav_listElement.appendChild(liElement)
    event.preventDefault()
    formElement.reset()
}