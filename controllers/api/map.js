// Store your API key in an environment variable or configuration file.
const apiKey = "AIzaSyCbHIyT2Mt-FO1D2JDGE4NAAHUXlDfFIYo";
// Create a function to initialize the map (this should be defined elsewhere in your code).

// Create a script element and set its source to load the Google Maps API.
const script = document.createElement("script");
script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&libraries=places&v=weekly`;
// Append the script element to the document's head, which will trigger the API request.



function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 41.966777553651454, lng: -87.64582153961592 },
      zoom: 11
    });

    var markers = [];
    var maxMarkers = 20;

    document.getElementById('searchButton').addEventListener('click', function () {
      var zipCode = document.getElementById('zipcodeInput').value;
      if (zipCode) {
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({ 'address': zipCode }, function (results, status) {
          if (status === 'OK') {
            var location = results[0].geometry.location;
            var service = new google.maps.places.PlacesService(map);
            map.setCenter(location);
          } else {
          }
        });
      } else {
      }
    });
  }
  
  document.head.appendChild(script);