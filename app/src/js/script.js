console.log('Hello World');

const containerEl = document.querySelector('.js-container');

// [...containerEl.children].forEach((item) =>
//   item.addEventListener('click', onClick)
// );

containerEl.addEventListener('click', onClick);

function onClick(event) {
  if (event.target.classList.contains('js-box')) {
    console.log(event.currentTarget);
    console.log(event.target);
  } else {
    console.log('error');
  }
}
