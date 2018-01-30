'use strict'
var operators = /[+\-\*\/\^\%]/;

function doMath(){
var totalString = document.getElementById('display').value;
var firstNum = parseFloat(totalString);
var operation = totalString.match(/[+\-\*\/\^\%]/)[0];
var locationIndex = totalString.indexOf(operation);
var secondNum = Number(totalString.substr(locationIndex+1));
var result;

switch (operation){
    case '+':
            result = firstNum + secondNum;
            break;
    case '-':
        result = firstNum - secondNum;
        break;
    case '*':
        result = firstNum * secondNum;
        break;
    case '/':
        result = firstNum / secondNum;
        break;
    case '^':
        result = firstNum ^ secondNum;
        break;
    case '%':
        result = firstNum % secondNum;
        break;
}
document.calculator.display.value = parseFloat(result.toFixed(5));

}


function checkForDecimal(){
    var totalString = document.getElementById('display').value;
    if (operators.test(totalString)){
        var secondHalf = totalString.substr(totalString.match(operators).index+1,)
        document.calculator.display.value = (secondHalf.indexOf('.') > 0) ?  totalString : totalString + ".";
    } else {
    document.calculator.display.value = (totalString.indexOf('.') > 0) ?  totalString : totalString + ".";
    }
}

function changeOperator(value){
    var totalString = document.getElementById('display').value;
    document.calculator.display.value = (operators.test(totalString)) ? totalString.replace(/.$/,value) : totalString + value;
}

function inputNumber(num){
    var totalString = document.getElementById('display').value;
    if (totalString.length > 5){
        document.getElementById("display").style.fontSize = '4em';
        document.calculator.display.value+= num;
    }
    else{
        document.calculator.display.value+= num;
    }
}
