const instance = basicLightbox.create(`
    <h1>Dynamic Content</h1>
    <p>You can set the content of the lightbox with JS.</p>
`);

const containerEl = document.querySelector('.js-container-car');

console.log(instance);
instance.show();

const cars = [
  {
    id: 1,
    car: 'Honda',
    type: 'Civic',
    price: 12000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/2022_Honda_Civic_LX_Sedan%2C_front_right%2C_11-02-2022.jpg/250px-2022_Honda_Civic_LX_Sedan%2C_front_right%2C_11-02-2022.jpg',
  },
  {
    id: 2,
    car: 'Audi',
    type: 'Q7',
    price: 40000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI3PgqXcdh-7ZyzdYB0pNO-J3S5V4virmpGA&s',
  },
  {
    id: 33,
    car: 'BMW',
    type: '5 series',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsckcl39aJ8g1hBl6c1XSHtRqa_lF3kph9Rg&s',
  },
  {
    id: 3,
    car: 'Honda',
    type: 'Civic',
    price: 12000,
    number: '+380000000000',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/2022_Honda_Civic_LX_Sedan%2C_front_right%2C_11-02-2022.jpg/250px-2022_Honda_Civic_LX_Sedan%2C_front_right%2C_11-02-2022.jpg',
  },
  {
    id: 4,
    car: 'Audi',
    type: 'Q7',
    price: 40000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI3PgqXcdh-7ZyzdYB0pNO-J3S5V4virmpGA&s',
  },
  {
    id: 5,
    car: 'BMW',
    type: '5 series',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsckcl39aJ8g1hBl6c1XSHtRqa_lF3kph9Rg&s',
  },
  {
    car: 'Honda',
    type: 'Civic',
    price: 12000,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/2022_Honda_Civic_LX_Sedan%2C_front_right%2C_11-02-2022.jpg/250px-2022_Honda_Civic_LX_Sedan%2C_front_right%2C_11-02-2022.jpg',
  },
  {
    car: 'Audi',
    type: 'Q7',
    price: 40000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI3PgqXcdh-7ZyzdYB0pNO-J3S5V4virmpGA&s',
  },
  {
    id: 6,
    car: 'BMW',
    type: '5 series',
    price: 9000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsckcl39aJ8g1hBl6c1XSHtRqa_lF3kph9Rg&s',
  },
];

const markup = cars.map(
  ({ img, car, id }) =>
    `<li><img data-car-id="${id}" src="${img}" alt="${car}" width="300" /><h2>${car}</h2></li>`
);

containerEl.insertAdjacentHTML('beforeend', markup.join(''));
