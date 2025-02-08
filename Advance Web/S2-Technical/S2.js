document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".button-19");
    const boxes = document.querySelectorAll(".box > div");

    let activeBox = null;
    let activeIndex = -1;

    boxes.forEach(box => {
        box.style.opacity = "0";
        box.style.transform = "translateY(-100%)";
        box.style.position = "absolute";
        box.style.border = "10px solid transparent";
        box.style.transition = "opacity 0.8s, transform 1.2s, background-color 0.5s";
    });

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            if (activeIndex === index) return;
            switchBox(index, getAfterBackgroundColor(button));
        });
    });

    function switchBox(newIndex, borderColor) {
        const newBox = boxes[newIndex];

        if (activeBox && activeBox !== newBox) {
            activeBox.style.opacity = "0";
            activeBox.style.transform = "translateY(-150%)";
        }

        newBox.style.backgroundColor = borderColor;
        newBox.style.borderColor = borderColor;
        newBox.style.opacity = "0";
        newBox.style.transform = "translateY(-100%)";

        setTimeout(() => {
            newBox.style.opacity = "1";
            newBox.style.transform = "translateY(0)";
        }, 50);

        setTimeout(() => {
            newBox.style.backgroundColor = "transparent";
        }, 800);

        activeBox = newBox;
        activeIndex = newIndex;
    }

    function getAfterBackgroundColor(element) {
        return window.getComputedStyle(element, "::after").backgroundColor;
    }
});
