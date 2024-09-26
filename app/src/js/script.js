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

let player = 'X';
let markup = '';
const historyX = [];
const history0 = [];

for (let i = 1; i < 10; i += 1) {
  markup += `<div class="item js-item" data-id="${i}"></div>`;
}

console.log(markup);
contentEl.innerHTML = markup;

contentEl.addEventListener('click', onClick);

function onClick(event) {
  const { target } = event;
  if (!target.classList.contains('js-item') || target.textContent) {
    return;
  }
  const id = Number(target.dataset.id);
  if (player === 'X') {
    historyX.push(id);
  } else {
    history0.push(id);
  }

  console.log(isWinner(historyX));
  target.textContent = player;
  player = player === 'X' ? '0' : 'X';
}

function isWinner(arr) {
  return wins.some((item) => item.every((id) => arr.includes(id)));
}
