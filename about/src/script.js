document.addEventListener("DOMContentLoaded", function() {
    const name = localStorage.getItem("userName");
    if (name) {
        document.getElementById("displayName").textContent = `Your Name: ${name}`;
    } else {
        document.getElementById("displayName").textContent = "No name found. Please go back and enter your name.";
    }
});
