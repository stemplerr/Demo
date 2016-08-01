var latlong = { lat: 0, lng: 0 };
$(function () {
    var venueId = 0;

    $.get("http://ec.planaby.com/woman/ra/Mtly/2456.json", function (result) {
        $('.title').text(result.title);
        $('.venue-title').text(result.venue.title);
        $('.date').text($.format.date(result.startDate, "ddd, MMMM d yyyy"));
        $('.address').text(result.venue.address);
        venueId = result.venue.href;
        latlong.lat = result.venue.lat;
        latlong.lng = result.venue.lon;

        $.get("https://api.foursquare.com/v2//venues/" + venueId + "/photos?" +
            "client_id=MBZQULQJCV4Z0JVTLQFQZPL4ZPK0KZN1C0UDDQFAJFRHZFOH" +
            "&client_secret=F5WH0PRKT1KZKOQEBV5GV55G2MZ4ADE3L1M2INNC5LFZADZQ&v=20160726", function (result) {
                var photos = result.response.photos.items;
                $(photos).each(function (index, photo) {
                    if (index == 8)
                        return false;
                    $('.images-div').append('<img class="floating-box"src="' + photo.prefix + '300x500' + photo.suffix + '"/>');
                });
            });
        initMap(latlong);
    });
});

var directionsDisplay;
var directionsService;
var map;
function addListener(originAutocomplete) {
    originAutocomplete.addListener('place_changed', function () {
        var place = originAutocomplete.getPlace();
        if (!place.geometry) {
            window.alert("Autocomplete's returned place contains no geometry");
            return;
        }
        placeId = place.place_id;
        route(placeId, directionsService, directionsDisplay);
});
}
function initMap(latlong) {
    var myLatLng = new google.maps.LatLng(latlong.lat, latlong.lng);
    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();

    var mapOptions = {
        zoom: 15,
        center: myLatLng
    };
    var map = new google.maps.Map($('#map')[0], mapOptions);
    directionsDisplay.setMap(map);
    var startInput = document.getElementById('start-input');

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(startInput);
    var originAutocomplete = new google.maps.places.Autocomplete(startInput);

    addListener(originAutocomplete);
}

function route(placeId, directionsService, directionsDisplay) {
    if (!placeId) {
        return;
    }
    directionsService.route({
        origin: {'placeId': placeId},
        destination: latlong,
        travelMode: ['DRIVING']
    }, 
    function(response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}






