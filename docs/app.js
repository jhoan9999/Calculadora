const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const lastChar = display.value.charAt(display.value.length - 1);
        if (btn.id === "=") {
            display.value = eval(display.value);
        } else if (btn.id === "ac") {
            display.value = "";
        } else if (btn.id === "de") {
            display.value = display.value.slice(0, -1);
        } else if (btn.id === "+" || btn.id === "-" || btn.id === "*" || btn.id === "/") {
            if (lastChar !== "+" && lastChar !== "-" && lastChar !== "*" && lastChar !== "/") {
                display.value += btn.id;
            }
        } else {
            display.value += btn.id;
        }
    });
});
