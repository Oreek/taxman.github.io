document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("nameInput").value;
    localStorage.setItem("userName", name);
    window.location.href = "about.html";
});