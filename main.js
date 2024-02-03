import { setupGrid, updateGrid } from "./grid";
import { generateNumbersToPress } from "./numberGenerator";
import { updateScore, resetScore } from "./score";
import { updateLevel } from "./levels";
import { startTimer } from "./timer";
import "./style.css";

document.querySelector("#app").innerHTML = `
  <div>
    <div class="timer">
      <div class="timer__progress"></div>
    </div>
    <div class="grid">
    </div>
    <div class="score">Score: <span class="score__value">0</span></div>
    <div class="level">Level: <span class="level__value">1</span></div>
  </div>
`;

let numbersToPress = generateNumbersToPress();
const gridContainer = document.querySelector(".grid");
const scoreContainer = document.querySelector(".score .score__value");
const levelContainer = document.querySelector(".level .level__value");
const timerContainer = document.querySelector(".timer .timer__progress");

setupGrid(gridContainer, onButtonClick);

function onButtonClick(number) {
  const isNumberInArray = numbersToPress.find((n) => n === number);
  if (isNumberInArray) {
    numbersToPress.splice(numbersToPress.indexOf(number), 1);
    const score = updateScore(scoreContainer, 10); 
    updateLevel(levelContainer, score);
    if (numbersToPress.length === 0) {
      numbersToPress = generateNumbersToPress();
    }
    updateGrid(gridContainer, numbersToPress);
  }
}

function onTimerEnd() {
  alert("Game Over");
  resetScore();
  updateScore(scoreContainer, 0);
  updateLevel(levelContainer, 0);
  startTimer(timerContainer, 30, onTimerEnd);
}

updateGrid(gridContainer, numbersToPress);
startTimer(timerContainer, 30, onTimerEnd);
