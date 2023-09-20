const apiKey = "AIzaSyCbHIyT2Mt-FO1D2JDGE4NAAHUXlDfFIYo";

const script = document.createElement("script");
script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap&libraries=places&v=weekly`;

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