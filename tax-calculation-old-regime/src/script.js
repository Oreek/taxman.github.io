function calculateTax() {
    const netSalary = parseFloat(document.getElementById('netSalary').value);
    const deduction = 50000;
    let taxableIncome = netSalary - deduction;
    let taxPayable = 0;

    if (taxableIncome > 250000 && taxableIncome <= 500000) {
        taxPayable = taxableIncome * 0.05;
    } else if (taxableIncome > 500000 && taxableIncome <= 1000000) {
        taxPayable = taxableIncome * 0.20;
    } else if (taxableIncome > 1000000) {
        taxPayable = taxableIncome * 0.30;
    }

    const cashInHand = taxableIncome - taxPayable;

    document.getElementById('deduction').value = deduction;
    document.getElementById('taxPayable').value = taxPayable.toFixed(2);
    document.getElementById('cashInHand').value = cashInHand > 0 ? cashInHand.toFixed(2) : 0;
}
