// getting value


// add Evenlistener for calculate btn
document.getElementById('calculate').addEventListener('click', function () {
    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);

    const overalCost = software + courses + internet;
    const balance = income - overalCost;
    document.getElementById('balance').innerText = balance.toFixed(2);
    document.getElementById('total-expenses').innerText = overalCost.toFixed(2);

    // result summerry
    document.getElementById('results').classList.remove('hidden');

})

// add Evenlistener for saving btn

document.getElementById('calculate-savings').addEventListener('click', function () {
    const savingsPersent = parseFloat(document.getElementById('savings').value);
    // console.log(savingsPersent);  //nan

    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);

    const overalCost = software + courses + internet;
    console.log(overalCost);
    const balance = income - overalCost;

    const savingsAmmount = (balance * savingsPersent) / 100;
    document.getElementById('savings-amount').innerText = savingsAmmount.toFixed(2);

    const remainingBalance = balance - savingsAmmount;
    document.getElementById('remaining-balance').innerText = remainingBalance.toFixed(2);




})