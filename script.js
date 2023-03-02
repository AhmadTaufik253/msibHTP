const colorInput = document.getElementById("color");
const colorDisplay = document.querySelector(".color-display");
const colorCode = document.getElementById("color-code");

function updateColor() {
  const colorValue = colorInput.value;
  colorDisplay.style.backgroundColor = colorValue;
  colorCode.value = colorValue;
}

colorInput.addEventListener("input", updateColor);
updateColor();
