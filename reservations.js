const reservations = [];

function addReservation(name, dateTime) {
  return reservations.some(r => r.dateTime === dateTime)
    ? alert('Esa mesa ya está reservada para esa fecha/hora')
    : reservations.push({ name, dateTime });  
}

document.getElementById('reservation-form').addEventListener('submit', e => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const dateTime = document.getElementById('datetime').value;
  
  addReservation(name, dateTime);
  
  displayReservations();
});

function displayReservations() {
  const resElement = document.getElementById('reservations');
  
  resElement.innerHTML = '';
  
  reservations.forEach(r => {
    const li = document.createElement('li');
    li.textContent = `${r.name} - ${r.dateTime}`;
    
    resElement.appendChild(li);
  });
}