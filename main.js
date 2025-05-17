import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js"

const firebaseConfig = {
    databaseURL: "https://birthday-app-27823-default-rtdb.firebaseio.com/"
}

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)

const birthdayInputField = document.getElementById("birthday-input")
const submitButton = document.getElementById("submit-button")

submitButton.addEventListener("click", function() {
    console.log(birthdayInputField.value)
    birthdayInputField.value = ""
})