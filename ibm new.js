document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Appointment booked successfully!');
});

document.getElementById('patientLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Patient logged in successfully!');
});

document.getElementById('departmentLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Department logged in successfully!');
});

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Feedback submitted successfully!');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent successfully!');
});