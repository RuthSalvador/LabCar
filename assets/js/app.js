function initMap() {
  var yo = {lat: -25.363, lng: 131.044};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: yo
  });
  var marker = new google.maps.Marker({
    position: yo,
    map: map
  });
}
