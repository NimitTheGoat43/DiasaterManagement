document.getElementById('disasterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const type = document.getElementById('type').value;
    const location = document.getElementById('location').value;
    const severity = document.getElementById('severity').value;

    const disasterReport = `Type=${type}&Location=${location}&Severity=${severity}`;

    fetch('http://localhost:8080', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: disasterReport,
    })
    .then(response => response.text())
    .then(data => {
        console.log('Success:', data);
        alert('Disaster reported successfully!');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
