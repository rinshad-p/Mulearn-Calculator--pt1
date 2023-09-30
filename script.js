
let sumEl = document.getElementById("sum-el")
function add() {
    let num1 = Number(document.getElementById("num1-el").value) 
    let num2 = Number(document.getElementById("num2-el").value) 
    let result = num1 + num2
    sumEl.textContent = "Result "+"("+num1+"+"+num2 +")" +":  "+ result
}

function subtract() {
    let num1 = Number(document.getElementById("num1-el").value) 
    let num2 = Number(document.getElementById("num2-el").value) 
    let result = num1 - num2
    sumEl.textContent = "Result "+"("+num1+"-"+num2 +")" +":  "+ result
}

function divide() {
    let num1 = Number(document.getElementById("num1-el").value) 
    let num2 = Number(document.getElementById("num2-el").value) 
    let result = num1 / num2
    sumEl.textContent = "Result "+"("+num1+"/"+num2 +")" +":  "+ result
}

function multiply() {
    let num1 = Number(document.getElementById("num1-el").value) 
    let num2 = Number(document.getElementById("num2-el").value) 
    let result = num1 * num2
    sumEl.textContent = "Result "+"("+num1+"*"+num2 +")" +":  "+ result
}


