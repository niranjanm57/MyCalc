let display = document.getElementById("display");

function clearDisplay() {
    display.textContent = "0";
}

function appendValue(value) {
    if (display.textContent === "0") {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function backspace() {
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent === "") {
        display.textContent = "0";
    }
}

function calculate() {
    let expression = display.textContent;

    // Handle percentage calculations
    expression = expression.replace(/(\d+)%/g, "(($1) / 100)");

    try {
        display.textContent = eval(expression.replace("÷", "/").replace("×", "*"));
    } catch {
        display.textContent = "Error";
    }
}
