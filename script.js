// script.js

// Function to fetch and display data from the server
function fetchData() {
  fetch('http://192.168.29.85/data')
    .then(response => response.json())
    .then(data => {
      document.getElementById('displayTemperature').textContent = data.temperature;
      document.getElementById('displayHumidity').textContent = data.humidity;
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Event listener for form submission
document.getElementById('dataForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const temperature = document.getElementById('temperature').value;
  const humidity = document.getElementById('humidity').value;

  fetch('http://192.168.29.85/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ temperature, humidity })
  })
  .then(response => response.json())
  .then(data => console.log('Data sent successfully:', data))
  .catch(error => console.error('Error sending data:', error));
});

// Fetch data initially and set up periodic updates
fetchData();
setInterval(fetchData, 5000); // Fetch data every 5 seconds
