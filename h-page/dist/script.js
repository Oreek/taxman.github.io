// Function to switch between tabs
function openTab(event, tabName) {
    let i, tabContent, tabLinks;

    // Hide all tab content
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Remove the active class from all tab links
    tabLinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    // Show the current tab and add "active" class to the clicked tab
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

// Function to calculate tax for New Regime
function calculateNewRegime() {
    let income = document.getElementById("newRegimeIncome").value;
    let result = document.getElementById("newRegimeResult");

    // Placeholder calculation logic (you can replace with actual logic)
    let tax = income * 0.2;
    
    result.textContent = `Your tax under the new regime is: $${tax}`;
}

// Function to calculate tax for Old Regime
function calculateOldRegime() {
    let income = document.getElementById("oldRegimeIncome").value;
    let result = document.getElementById("oldRegimeResult");

    // Placeholder calculation logic (you can replace with actual logic)
    let tax = income * 0.25;
    
    result.textContent = `Your tax under the old regime is: $${tax}`;
}

// Set the default open tab
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tab-link").click();
});