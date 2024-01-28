export function startTimer(element, totalTimeInSeconds, callback) {
  let timeLeft = totalTimeInSeconds;
  const intervalId = setInterval(() => {
    if (timeLeft === 0) {
      clearInterval(intervalId);
      callback();
      return;
    }
    element.style.width = `${(timeLeft / totalTimeInSeconds) * 100}%`;
    timeLeft--;
  }, 1000);
}
