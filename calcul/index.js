function calculate(operator) {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result;

    if (!num1 || !num2) {
        document.getElementById("result").innerText = "Please enter valid numbers";
        return;
    }


    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero"; break;
    }
    document.getElementById("result").innerText = "Result: " + result;
}