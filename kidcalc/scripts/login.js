const loginPage = document.getElementById("login");
const loginForm = document.getElementById("login-form");
const header = document.getElementById("header");
const kidcalc = document.getElementById("kidcalc");

// Submit Login
loginForm.addEventListener("submit", (event) => {
    processLogin();
    event.preventDefault();
});

// Get Inputs From Form
function getFormData(formId) {
    let formData = {};
    const inputs = Array.from(document.querySelectorAll(
        `#${formId} input:not(#submit-button), #${formId} select`
    ));
    for (let i = 0; i < inputs.length; i++) {
        formData[inputs[i].name] = inputs[i].value;
    }
    return formData;
}

// Set User And Theme
function processLogin() {
    const userInfo = getFormData(loginForm.id);

    setTheme(userInfo["theme"]);
    setInformationBar(userInfo["name"]);
    document.getElementById("main-section").style.display = "flex";

    loginPage.style.display = "none";
    kidcalc.style.display = "block";
    header.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.2), transparent)";
}

// Append CSS Theme Link To HTML Head
function setTheme(theme) {
    const htmlHead = document.getElementsByTagName("head")[0];

    const themeLink = document.createElement("link");
    themeLink.rel = "stylesheet";

    if (theme === "nature") {
        themeLink.href = "assets/css/themes/nature.css";
        htmlHead.appendChild(themeLink);
    } else if (theme === "space") {
        themeLink.href = "assets/css/themes/space.css";
        htmlHead.appendChild(themeLink);
    } else {
        themeLink.href = "assets/css/themes/math.css";
        htmlHead.appendChild(themeLink);
    }
}

// Set Information Bar And Greeting
function setInformationBar(userName) {
    const informationBar = document.getElementById("information-bar");
    const greeting = document.getElementById("greeting");

    informationBar.style.display = "flex";
    greeting.innerText = greeting.textContent = `Hello ${userName}!`;
}