navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
    console.log(latitude, longitude);

     
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&cnt=10&appid=a1c23503e3844c136140a0cb126e42d2`;
    fetch(url)
        .then(response =>response.json())
        .then(result => console.log(result.name))
  });