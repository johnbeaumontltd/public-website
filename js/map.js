function initMap() {
    var mapDiv = document.getElementById('map');
    var isBigScreen = window.matchMedia( "(min-width: 768px)" );
    var myLatLng = {
        lat: 53.640302,
        lng: -1.778849
    };
    var map = new google.maps.Map(mapDiv, {
        center: myLatLng,
        zoom: 17,
        scrollwheel: false,
        panControl:isBigScreen
    });
    var infowindow = new google.maps.InfoWindow({
        content: "John Beaumonts Ltd."
    });
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'John Beaumonts Ltd'
    });
    infowindow.open(map, marker);
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
}