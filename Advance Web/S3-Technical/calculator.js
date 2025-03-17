document.addEventListener("DOMContentLoaded", function () {
    const resultDisplay = document.querySelector(".result");
    const buttons = document.querySelectorAll(".numbers li");

    let equation = "";

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const value = this.textContent;

            if (!isNaN(value) || value === ".") {
                equation += value;
                resultDisplay.textContent = equation;
            } else if (value === "c") {
                equation = "";
                resultDisplay.textContent = "0";
            } else if (value === "<") {
                equation = equation.slice(0, -1);
                resultDisplay.textContent = equation || "0";
            } else if (["+", "-", "x", "/"].includes(value)) {
                if (equation !== "" && !["+", "-", "x", "/"].includes(equation.slice(-1))) {
                    equation += value;
                    resultDisplay.textContent = equation;
                }
            } else if (value === "=") {
                try {
                    let result = eval(equation.replace(/x/g, "*"));
                    resultDisplay.textContent = result;
                    equation = result.toString();
                } catch (error) {
                    resultDisplay.textContent = "Error";
                    equation = "";
                }
            }
        });
    });
});