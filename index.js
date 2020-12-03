// initialize displayval variable to empty to store the concated input value and previousval to 0 to perform first operation
var displayVal = " ";
var previousVal = 0;

// initialize operator value to + for first operation and default
var opt = '+';
var result;
// to concat the given input value and store it on the click of number button
function calculate(value) {
    displayVal += value;
    document.getElementById('result').value = displayVal;
}
// to perform operation on the click of operator and display result
function operation(operator) {

    document.getElementById('oper').innerHTML = operator;
    console.log(previousVal);
    if (opt == '+') { var reducer = (previousVal, displayVal) => previousVal + displayVal; }
    else if (opt == '-') { var reducer = (previousVal, displayVal) => previousVal - displayVal; }
    else if (opt == '*') { var reducer = (previousVal, displayVal) => previousVal * displayVal; }
    else if (opt == '/') { var reducer = (previousVal, displayVal) => previousVal / displayVal; }
    else if (opt == '=') { var reducer = (previousVal, displayVal) => previousVal + " "; }
    result = reducer((+previousVal), (+displayVal));
    document.getElementById('result').value = result;
    previousVal = result;
    opt = operator;
    displayVal = " ";
}
// to clear the screen on button click.
function clea() {
    document.getElementById('result').value = '  ';
    document.getElementById('oper').innerHTML = '  ';
    displayVal = " ";
    result = 0;
    previousVal = " ";
    opt = '+';

}
// backspace for input value
function back() {
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
    displayVal = value.substr(0, value.length - 1);
}