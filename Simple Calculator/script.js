//

const display = document.getElementById("display");
let current = "";
let previous = "";
let op = null;

// Update display helper
function updateDisplay(value) {
  display.textContent = value || "0";
}

// Append number or dot
function appendNum(n) {
  if (n === "." && current.includes(".")) return;
  current += n;
  updateDisplay(current);
}

// Choose operation
function chooseOp(operator) {
  if (current === "") return;
  if (previous !== "") compute();
  op = operator;
  previous = current;
  current = "";
}

// Compute result
function compute() {
  const prev = parseFloat(previous);
  const curr = parseFloat(current);
  if (isNaN(prev) || isNaN(curr)) return;
  let result;
  switch (op) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "*":
      result = prev * curr;
      break;
    case "/":
      result = curr === 0 ? "ERR" : prev / curr;
      break;
    default:
      return;
  }
  current = result.toString();
  op = null;
  previous = "";
  updateDisplay(current);
}

// Delete last char
function del() {
  current = current.slice(0, -1);
  updateDisplay(current);
}

// All clear
function allClear() {
  current = "";
  previous = "";
  op = null;
  updateDisplay("0");
}

// Event listeners
document
  .querySelectorAll("[data-num]")
  .forEach((btn) =>
    btn.addEventListener("click", () => appendNum(btn.dataset.num))
  );
document
  .querySelectorAll(".ops")
  .forEach((btn) =>
    btn.addEventListener("click", () => chooseOp(btn.dataset.op))
  );
document.getElementById("equals").addEventListener("click", () => compute());
document.getElementById("delete").addEventListener("click", del);
document.getElementById("all-clear").addEventListener("click", allClear);

// Allow Enter key to compute
window.addEventListener("keydown", (e) => {
  if (e.key >= "0" && e.key <= "9") {
    appendNum(e.key);
  } else if (e.key === ".") {
    appendNum(".");
  } else if (["+", "-", "*", "/"].includes(e.key)) {
    chooseOp(e.key);
  } else if (e.key === "Enter" || e.key === "=") {
    compute();
  } else if (e.key === "Backspace") {
    del();
  } else if (e.key === "Escape" || e.key.toLowerCase() === "c") {
    allClear();
  }
});
