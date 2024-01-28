const NUMPAD_ORDER = [7, 8, 9, 4, 5, 6, 1, 2, 3];

export function setupGrid(gridContainer, callback) {
  const elements = [];
  for (let i = 0; i < 9; i++) {
    const number = NUMPAD_ORDER[i];
    elements.push(createGridButton(number, callback));
  }
  gridContainer.append(...elements);
}

function createGridButton(number, callback) {
  const button = document.createElement("button");
  button.classList.add("tile");
  button.textContent = number;
  button.addEventListener("click", () => handleButtonClick(number, callback));

  return button;
}

function handleButtonClick(number, callback) {
  callback(number);
}

export function updateGrid(gridContainer, numbers) {
  const tiles = document.querySelectorAll(".tile");

  for (let i = 0; i < tiles.length; i++) {
    tiles[i].classList.remove("active");
  }
  for (let i = 0; i < numbers.length; i++) {
    const position = NUMPAD_ORDER.indexOf(numbers[i]);
    const tile = tiles[position];
    tile.classList.add("active");
  }
}
