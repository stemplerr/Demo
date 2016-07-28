var latlong = {lat: 0, lng: 0};
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
                    $('.images-div').append('<img class="floating-box"src="' + photo.prefix + '300x500' + photo.suffix + '"/>')
                });
            });
        initMap(latlong);
    });
});

function initMap(latlong) {

    var myLatLng = new google.maps.LatLng(latlong.lat, latlong.lng);
    var mapOptions = {
        zoom: 15,
        center: myLatLng
    };
    var map = new google.maps.Map($('#map')[0], mapOptions);
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
    });
}