document.addEventListener("DOMContentLoaded", function() {
    // Set the definition of tax
    const taxDefinition = "Tax is a mandatory financial charge or some other type of levy imposed upon a taxpayer by a governmental organization in order to fund various public expenditures.";
    document.getElementById("tax-definition").textContent = taxDefinition;

    // List of types of taxes
    const taxTypes = [
        "Income Tax",
        "Sales Tax",
        "Property Tax",
        "Corporate Tax",
        "Value-Added Tax (VAT)",
        "Excise Tax",
        "Customs Duty",
        "Payroll Tax"
    ];

    // Populate the types of taxes list
    const taxTypesList = document.getElementById("tax-types-list");
    taxTypes.forEach(type => {
        const listItem = document.createElement("li");
        listItem.textContent = type;
        taxTypesList.appendChild(listItem);
    });
});