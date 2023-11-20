const form = document.getElementById('reservation-form');
const nameInput = document.getElementById('name');
const datetimeInput = document.getElementById('datetime');
const reservationsList = document.getElementById('reservations');

let reservations = [];

const addReservation = () => {
  const name = nameInput.value;
  const datetime = datetimeInput.value;

  reservations.push({name, datetime});

  render();
}

const render = () => {
  reservationsList.innerHTML = ' ';

  reservations.forEach(r => {
    const li = document.createElement('li');
    li.innerText = `${r.name} - ${r.datetime}`;

    reservationsList.appendChild(li); 
  });
}

form.addEventListener('submit', e => {
  e.preventDefault();
  
  addReservation();

  nameInput.value = '';
  datetimeInput.value = '';
});
