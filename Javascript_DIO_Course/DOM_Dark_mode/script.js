const button = document.getElementById("mode_selector");
const h1 = document.getElementById("page_title");
//[0] is required because the method returns an array
const body = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];

function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    button.classList.toggle("dark_mode");
    body.classList.toggle("dark_mode");
    footer.classList.toggle("dark_mode");
}

function changeText() {
    if(button.classList.contains("dark_mode")) {
        button.innerText="Light Mode";
        h1.innerText="Dark Mode ON";
    } else {
        button.innerText="Dark Mode";
        h1.innerText="Light Mode ON";
    }
}

button.addEventListener("click", changeMode);