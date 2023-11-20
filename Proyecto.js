// Reservas
let reservations = [];

// Comprobar disponibilidad 
const checkAvailability = (datetime) => {
  return reservations.every(r => r.datetime !== datetime);
}

// Crear reserva
const createReservation = (name, datetime) => {
  if(checkAvailability(datetime)) {
    let newReservation = {name, datetime};
    reservations.push(newReservation);
    return true;
  }
  return false;
}  

// Mostrar reservas
const showReservations = () => {
  let html = '<ul>';
  reservations.forEach(r => {
    html += `<li>${r.name} - ${r.datetime}</li>`;
  });
  html += '</ul>';
  document.getElementById('reservations').innerHTML = html;
}

// Handler para botón Reservar
document.getElementById('reservation-form')
  .addEventListener('submit', e => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let datetime = document.getElementById('datetime').value;    
    if(createReservation(name, datetime)){
      alert('Reserva creada!');
      showReservations();
    } else {
      alert('Horario no disponible');
    }
});

// Handler para botón Ver Reservas
document.getElementById('see-reservations')
  .addEventListener('click', showReservations);