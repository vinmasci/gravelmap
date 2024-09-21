// Assuming this is what Mapbox gave you
mapboxgl.accessToken = 'pk.eyJ1IjoidmlubWFzY2kiLCJhIjoiY20xYmhmempzMG9jdzJpcTN2ZjJ4b3RodyJ9.18y5ZQPBFTIn6mOIcttJnA'; // Replace with your token

const map = new mapboxgl.Map({
    container: 'map', // ID of the container where the map will go
    style: 'mapbox://styles/mapbox/streets-v11', // Map style URL
    center: [-74.5, 40], // Initial position [longitude, latitude]
    zoom: 9 // Initial zoom level
});
