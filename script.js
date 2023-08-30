function submitForm() {
  const appointmentData = {
    date: document.getElementById('date').value,
    doctor: document.getElementById('doctor').value,
    reason: document.getElementById('reason').value
  };

  fetch('http://localhost:3000/api/appointments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(appointmentData)
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Appointment saved successfully!');
    } else {
      alert('Failed to save appointment.');
    }
  });
}
