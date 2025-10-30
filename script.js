function getNumbers(){
    let firstNumber = Number(document.getElementById('firstNumber').value)
    let secondNumber = Number(document.getElementById('secondNumber').value)
    return {firstNumber, secondNumber}
}

function addition() {
    let {firstNumber, secondNumber} = getNumbers()
    let result = firstNumber + secondNumber
    document.getElementById('result').innerHTML = result
}

function substraction() {
    let {firstNumber, secondNumber} = getNumbers()
    let result = firstNumber - secondNumber
    document.getElementById('result').innerHTML = result
}

function multiplication() {
    let {firstNumber, secondNumber} = getNumbers()
    let result = firstNumber * secondNumber
    document.getElementById('result').innerHTML = result
}

function division() {
    let {firstNumber, secondNumber} = getNumbers()
    let result = firstNumber / secondNumber
    document.getElementById('result').innerHTML = result
}