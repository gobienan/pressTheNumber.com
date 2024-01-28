let currentLevel = 1;

const SCORE_THRESHOLD = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900];

export function updateLevel(element, score) {
  if (score >= SCORE_THRESHOLD[currentLevel] && currentLevel < 9) {
    currentLevel++;
    element.textContent = currentLevel;
  }
}

export function getLevel() {
  return currentLevel;
}
