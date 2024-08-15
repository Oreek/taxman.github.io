document.addEventListener('DOMContentLoaded', function() {
    const newTip1 = document.createElement('li');
    newTip1.textContent = 'Use HRA exemption by submitting rent receipts if you live in a rented house.';
    document.getElementById('taxTips').appendChild(newTip1);

    const newTip2 = document.createElement('li');
    newTip2.textContent = 'Claim deductions for education loans under Section 80E.';
    document.getElementById('taxTips').appendChild(newTip2);

    const newBillionaireExample = document.createElement('li');
    newBillionaireExample.innerHTML = '<strong>Michael Bloomberg:</strong> Established a charitable foundation that donates billions annually, reducing his taxable income and maximizing deductions.';
    document.getElementById('billionaires').appendChild(newBillionaireExample);
});
