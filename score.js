
export let currentScore = 0;
export function updateScore(element, scoreChange) {
    currentScore += scoreChange;
    element.textContent = currentScore;
    return currentScore;
}

export function resetScore() {
    currentScore = 0;
}