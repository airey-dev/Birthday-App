import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBPbJzI7EuzIQIs39QeR_P03kH3KLoiXN4",
  authDomain: "birthday-app-27823.firebaseapp.com",
  databaseURL: "https://birthday-app-27823-default-rtdb.firebaseio.com",
  projectId: "birthday-app-27823",
  storageBucket: "birthday-app-27823.appspot.com", // ✅ fixed
  messagingSenderId: "1059141570646",
  appId: "1:1059141570646:web:47cd56151d05cb30646bf7"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const referenceInDB = ref(database, "birthdays");

const birthdayInputField = document.getElementById("birthday-input");
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function () {
  const value = birthdayInputField.value.trim();
  if (value) {
    push(referenceInDB, value)
      .then(() => {
        console.log("Data pushed successfully");
        birthdayInputField.value = "";
      })
      .catch((error) => {
        console.error("Push failed:", error);
      });
  }
});