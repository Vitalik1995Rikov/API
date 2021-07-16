export default navigator.geolocation.getCurrentPosition(position => {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log(latitude, longitude);
    return latitude;
});