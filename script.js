document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const historyList = document.getElementById("history-list");
    let currentExpression = "";
    
    // Function to update the display
    function updateDisplay() {
        display.value = currentExpression;
    }
    
    // Add click event listeners to number buttons
    const numberButtons = document.querySelectorAll(".number");
    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
            currentExpression += button.textContent;
            updateDisplay();
        });
    });
    
    // Add click event listeners to operator buttons
    const operatorButtons = document.querySelectorAll(".operator");
    operatorButtons.forEach(button => {
        button.addEventListener("click", () => {
            currentExpression += " " + button.textContent + " ";
            updateDisplay();
        });
    });
    
    // Add click event listener to clear button
    const clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", () => {
        currentExpression = "";
        updateDisplay();
    });
    
    // Add click event listener to equals button
    const equalsButton = document.getElementById("equals");
    equalsButton.addEventListener("click", () => {
        try {
            const result = eval(currentExpression);
            currentExpression = result.toString();
            updateDisplay();
            historyList.innerHTML += `<li>${currentExpression}</li>`;
        } catch (error) {
            currentExpression = "Error";
            updateDisplay();
        }
    });
    
    // Add click event listener to history list items
    historyList.addEventListener("click", event => {
        const clickedExpression = event.target.textContent;
        currentExpression = clickedExpression;
        updateDisplay();
    });
});
