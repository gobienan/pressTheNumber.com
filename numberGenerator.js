import { getLevel } from "./levels";

export function generateNumbersToPress() {
  const numbers = [];
  const numbersToPressPerLevel = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const level = getLevel();
  const numbersToPressCount = numbersToPressPerLevel[level - 1];
  console.log("numbersToPressCount", numbersToPressCount);

  while (numbers.length < numbersToPressCount) {
    const randomNumber = Math.floor(Math.random() * 9) + 1;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  console.log("numbers", numbers);
  return numbers;
}
