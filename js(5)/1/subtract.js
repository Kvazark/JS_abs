function subtract() {
    let num1 = document.getElementById('firstNumber').value;
    let num2 = document.getElementById('secondNumber').value;
    let result = parseFloat(num1)-parseFloat(num2);
     
    document.getElementById("result").innerText = result.toString();
}