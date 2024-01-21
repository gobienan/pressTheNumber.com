import { setupGrid, updateGrid } from "./grid";
import { generateNumbersToPress } from "./numberGenerator";
import "./style.css";

document.querySelector("#app").innerHTML = `
  <div>
    <h3>Press the Number</h3>
    <div class="grid">
    </div>
  </div>
`;

let numbersToPress = generateNumbersToPress();
const gridContainer = document.querySelector(".grid");
setupGrid(gridContainer, onButtonClick);

function onButtonClick(number) {
  console.log(number);
  const isNumberInArray = numbersToPress.find((n) => n === number);
  if (isNumberInArray) {
    numbersToPress.shift();
    numbersToPress = generateNumbersToPress();
    updateGrid(gridContainer, numbersToPress);
  }
}

updateGrid(gridContainer, numbersToPress);
