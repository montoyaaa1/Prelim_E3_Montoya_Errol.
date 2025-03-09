
const userNameElement = document.getElementById("userName");
const nameInput = document.getElementById("nameInput");
const toggleModeButton = document.getElementById("toggleMode");
const appElement = document.getElementById("app");


nameInput.addEventListener("input", (event) => {
    userNameElement.textContent = event.target.value || "Errol Montoya";
});


toggleModeButton.addEventListener("click", () => {
    const isDark = appElement.classList.toggle("dark-mode");
    appElement.classList.toggle("light-mode");

    toggleModeButton.textContent = isDark ? "Switch to Light Mode" : "Switch to Dark Mode";
});
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
