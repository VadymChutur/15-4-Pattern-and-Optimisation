console.log('Hello World');

// const containerEl = document.querySelector('.js-container');

// // [...containerEl.children].forEach((item) =>
// //   item.addEventListener('click', onClick)
// // );

// containerEl.addEventListener('click', onClick);

// function onClick(event) {
//   if (!event.target.classList.contains('js-box')) {
//     console.log('error');
//     return;
//   } else {
//     console.log(event.currentTarget);
//     console.log(event.target.dataset.color);
//   }
// }

const contentEl = document.querySelector('.js-content');
const winnerEl = document.querySelector('.js-winner');
let player = 'X';
let historyX = [];
let history0 = [];
const wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function createMarkup() {
  let markup = '';
  for (let i = 1; i < 10; i += 1) {
    markup += `<div class="item js-item" data-id="${i}"></div>`;
  }
  contentEl.innerHTML = markup;
}

function isWinner(arr) {
  return wins.some((item) => item.every((id) => arr.includes(id)));
}

function resetGame() {
  createMarkup();
  historyX = [];
  history0 = [];
  player = 'X';
}

createMarkup();

contentEl.addEventListener('click', onClick);

function onClick(event) {
  const { target } = event;
  if (!target.classList.contains('js-item') || target.textContent) {
    return;
  }

  let result = false;

  const isEndGame = historyX.length + history0.length === 9;
  const id = Number(target.dataset.id);
  if (player === 'X') {
    historyX.push(id);
    result = isWinner(historyX);
  } else {
    history0.push(id);
    result = isWinner(history0);
  }

  console.log(isWinner(historyX));
  target.textContent = player;

  if (result) {
    winnerEl.textContent = `Winner ${player}`;
    resetGame();
    return;
  } else if (historyX.length + history0.length === 9) {
    console.log(isEndGame);
    console.log('Try againe :)');
    resetGame();
    return;
  }
  player = player === 'X' ? '0' : 'X';
}
