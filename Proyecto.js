// Almacenar reservas en memoria
let reservations = []; 

// Comprobar disponibilidad
function checkAvailability(datetime) {
  // Buscar conflicos de horarios  
  return reservations.every(r => r.datetime !== datetime);
}

// Crear reserva
function createReservation(name, datetime) {
  if (checkAvailability(datetime)) {
    const newReservation = {
      name,
      datetime
    };
    
    reservations.push(newReservation);
    
    return true; // Reserva creada
  }
  
  return false; // Horario no disponible
}

// Lógica del botón reserva
const form = document.getElementById('reservation-form');

form.addEventListener('submit', e => {
  e.preventDefault();

  const name = form.elements['name'].value;
  const datetime = form.elements['datetime'].value;

  if (createReservation(name, datetime)) {
    showConfirmation(name);
  } else {
    alert("Lo sentimos, ese horario no está disponible");
  }

});