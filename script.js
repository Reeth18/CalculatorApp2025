document.addEventListener("DOMContentLoaded", function () {
  const display = document.querySelector("input[type='text']");
  const buttons = document.querySelectorAll(".button");
  let resultCalculated = false; // Track if a result has been calculated

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const value = this.textContent;

      if (value === "CLR") {
        display.value = ""; // Clear the display
        resultCalculated = false;
      } else if (value === "=") {
        try {
          display.value = eval(display.value); // Evaluate expression
          resultCalculated = true; // Mark that result is displayed
        } catch {
          display.value = "Error"; // Handle invalid input
          resultCalculated = true;
        }
      } else {
        if (resultCalculated) {
          if ("+-*/".includes(value)) {
            // If operator is pressed, continue calculation
            display.value += value;
          } else {
            // If a number is pressed, reset and start fresh
            display.value = value;
          }
          resultCalculated = false; // Reset flag after first input
        } else {
          display.value += value; // Append value as usual
        }
      }
    });
  });
});
