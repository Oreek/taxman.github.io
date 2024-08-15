function calculateTax() {
    const netSalary = parseFloat(document.getElementById('netSalary').value);
    const deduction = 50000;
    let taxRate = 0;

    // Determine tax rate based on net salary after deduction
    if (netSalary > 1500000) {
        taxRate = 0.30;
    } else if (netSalary > 1200000) {
        taxRate = 0.20;
    } else if (netSalary > 1000000) {
        taxRate = 0.15;
    } else if (netSalary > 700000) {
        taxRate = 0.10;
    } else if (netSalary > 300000) {
        taxRate = 0.05;
    }

    const taxableIncome = netSalary - deduction;
    const taxPayable = taxableIncome > 0 ? taxableIncome * taxRate : 0;
    const cashInHand = taxableIncome > 0 ? taxableIncome - taxPayable : 0;

    document.getElementById('deduction').value = deduction;
    document.getElementById('taxPayable').value = taxPayable > 0 ? taxPayable : 0;
    document.getElementById('cashInHand').value = cashInHand > 0 ? cashInHand : 0;
}
