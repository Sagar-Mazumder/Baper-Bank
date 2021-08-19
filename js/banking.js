// function for deposit
function inputAmount(idName) {
    const Input = document.getElementById(idName);
    const ValueText = Input.value;
    const Value = parseFloat(ValueText);
    // clear value
    Input.value = '';
    return Value;
}
// function deposit and withdraw summation
function summationAmount(inputid, amount) {
    // debugger;
    const depositTotal = document.getElementById(inputid);
    const prevoiusDepositText = depositTotal.innerText;
    const prevousDeposit = parseFloat(prevoiusDepositText);
    const newTotal = prevousDeposit + amount;
    depositTotal.innerText = newTotal;
}
// function checking
function checkingValue() {
    const balenceInput = document.getElementById('total-balence');
    const balenceValueText = balenceInput.innerText;
    const balenceValue = parseFloat(balenceValueText);
    return balenceValue;
}
// function for total balence
function totalBalence(Value, addvalue) {
    const balenceInput = document.getElementById('total-balence');
    /*const balenceValueText = balenceInput.innerText;
    const balenceValue = parseFloat(balenceValueText); */
    const balenceValue = checkingValue();
    if (addvalue == true) {
        const newBalence = balenceValue + Value;
        balenceInput.innerText = newBalence;
    }
    else {
        const newBalence = balenceValue - Value;
        balenceInput.innerText = newBalence;
    }
}
// deposit
document.getElementById('deposit-button').addEventListener('click', function () {
    /* const depositInput = document.getElementById('deposit-field');
    const depositValueText = depositInput.value;
    const depositValue = parseFloat(depositValueText); */
    // adding to total deposit
    /* const depositTotal = document.getElementById('total-deposit');
    const prevoiusDepositText = depositTotal.innerText;
    const prevousDeposit = parseFloat(prevoiusDepositText);
    const newTotal = prevousDeposit + depositValue;
    depositTotal.innerText = newTotal; */
    // adding to totalBalence
    /* const balenceInput = document.getElementById('total-balence');
    const balenceValueText = balenceInput.innerText;
    const balenceValue = parseFloat(balenceValueText);
    const newBalence = balenceValue + depositValue;
    balenceInput.innerText = newBalence; */
    const depositValue = inputAmount('deposit-field');

    if (depositValue > 0) {
        summationAmount('total-deposit', depositValue);
        totalBalence(depositValue, true);
    }
});
// withdrow
document.getElementById('withdrow-button').addEventListener('click', function () {
    /* const withdrawInput = document.getElementById('withdrow-field');
    const withdrawOutputText = withdrawInput.value;
    const withdrawOutput = parseFloat(withdrawOutputText); */
    // adding in total withdrow
    /* const withdraw = document.getElementById('total-withdraw');
    const withdrawText = withdraw.innerText;
    const withdrawValue = parseFloat(withdrawText);
    const totalWithdraw = withdrawOutput + withdrawValue;
    withdraw.innerText = totalWithdraw; */
    // totalBalence
    /* const newBalence = document.getElementById('total-balence');
    const newBalenceText = newBalence.innerText;
    const newBalenceValue = parseFloat(newBalenceText);
    const totalNewBalence = newBalenceValue - withdrawOutput;
    newBalence.innerText = totalNewBalence; */
    const withdrawOutput = inputAmount('withdrow-field');
    const balence = checkingValue()
    if (withdrawOutput > 0 && withdrawOutput <= balence) {
        summationAmount('total-withdraw', withdrawOutput);
        totalBalence(withdrawOutput, false);
    }

});