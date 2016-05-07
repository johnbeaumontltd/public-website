function initMap() {
    var mapDiv = document.getElementById('map');
    var myLatLng = {
        lat: 53.640302,
        lng: -1.778849
    };
    var map = new google.maps.Map(mapDiv, {
        center: myLatLng,
        zoom: 17
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
    });
}