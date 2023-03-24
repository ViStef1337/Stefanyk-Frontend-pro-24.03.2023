let num1 = Number(prompt ('enter first number: '));
let num2 = Number(prompt ('enter second number: '));
let operator = Number(prompt ('enter operator: '));
let result;
if(operator == '+') {
    result = num1 + num2;

}else if (operator == '/'){
    result = num1 / num2;

}else if (operator == '*'){
    result = num1 * num2;

}else if (operator == '-'){
    result = num1 - num2;

}
console.log(num1 + operator + num2 + '=' + result);