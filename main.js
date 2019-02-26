var valueSatu, valueDua, operator;

var calculate = function () {
    valueSatu = parseInt(document.querySelector('#valSatu').value);
    valueDua = parseInt(document.querySelector('#valDua').value);
    operator = document.querySelector('#operator').value;

    if (valueSatu && valueDua) {
        document.querySelector('.result').style.display = 'block';

        document.querySelector('.result').textContent = Math.round(eval(valueSatu + operator + valueDua));

        document.querySelector('#valSatu').value = '';
        document.querySelector('#valDua').value = '';
    }
}


document.querySelector('button').addEventListener('click', calculate);
document.addEventListener('keypress', function (e) {
    if (e.keyCode == 13 || e.which == 13) {
        calculate();
    }
})