//---------------------password-------------------------
const passOne = document.querySelector("#form-username");
const passTwo = document.querySelector("#form-verify");
const message = document.querySelector("#form-message");

passTwo.addEventListener("focusout", checkSame);

function checkSame() {
    if (passOne.value !== passTwo.value) {
        message.textContent = "Passwords DO NOT MATCH!";
        message.style.display = "block";
        message.style.backgroundColor = "#ffff33";
        passTwo.style.color = "#fff";
        passOne.focus();
        passTwo.value = "";
    } else {
        message.style.display = "none";
        passTwo.style.backgroundColor = "lightgrey";
        passTwo.style.color = "#000";
    }
}

