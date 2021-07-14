let url = 'http://api.weatherstack.com/current?access_key=17a677e3fd280a4a116ada9093dfdea0&query=Gorkey';

fetch(url)
    .then(response => response.json())
    .then(result => console.log(result))

