var valueSatu, valueDua, operator;

var startCalc = function () {
    valueSatu = document.querySelector('#valSatu').value;
    valueDua = document.querySelector('#valDua').value;
    operator = document.querySelector('#operator').value;

    if (valueSatu && valueDua) {
        document.querySelector('.result').style.display = 'block';

        document.querySelector('.result').textContent = Math.round(calculate(parseInt(valueSatu), parseInt(valueDua), operator));

        document.querySelector('#valSatu').value = '';
        document.querySelector('#valDua').value = '';
    }
}

var calculate = function (valSatu, valDua, operator) {

    if (operator === '*') {
        return valSatu * valDua;
    } else if (operator === '/') {
        return valSatu / valDua;
    } else if (operator === '+') {
        return valSatu + valDua;
    } else if (operator === '-') {
        return valSatu - valDua;
    } else if (operator === '%') {
        return valSatu % valDua;
    }
}

document.querySelector('button').addEventListener('click', startCalc);
document.addEventListener('keypress', function (e) {
    if (e.keyCode == 13 || e.which == 13) {
        startCalc();
    }
})