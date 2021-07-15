// let url = 'http://api.weatherstack.com/current?access_key=17a677e3fd280a4a116ada9093dfdea0&query=Nizhny Novgorod';
// let url = 'http://dataservice.accuweather.com/locations/v1/search'

// fetch(url)
//     .then(response =>response.json())
//     .then(result => console.log(result.location.name))


// let url = 'https://api.troposphere.io/place/name/Nizh?token=6d368806879089d14b943ca240991dfb0a4439cd1e89a17094'
// let position;   
//     fetch(url)
//         .then(response =>response.json())
//         .then(result => result.data[0].name)
//         .then(result => position = result)
//         .then(position => console.log(position))
// console.log(position);
// setTimeout((position) => console.log(position), 3000);

// let url = "https://weatherbit-v1-mashape.p.rapidapi.com/alerts?access_key=29aed78ea58e4b6eb91d92728491233e&lat=38.5&lon=-78.5"
// fetch('url')
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });


// let urls = [
//     'https://api.troposphere.io/place/name/Nizh?token=6d368806879089d14b943ca240991dfb0a4439cd1e89a17094',
//     'https://api.troposphere.io/place/name/London?token=6d368806879089d14b943ca240991dfb0a4439cd1e89a17094',
//     'https://api.troposphere.io/place/name/Berlin?token=6d368806879089d14b943ca240991dfb0a4439cd1e89a17094',
//     'https://api.troposphere.io/place/name/Milan?token=6d368806879089d14b943ca240991dfb0a4439cd1e89a17094',
//     'https://api.troposphere.io/place/name/Paris?token=6d368806879089d14b943ca240991dfb0a4439cd1e89a17094'
// ]

// let requests = urls.map(url => fetch(url));
// Promise.all(requests)
// .then(responses => Promise.all(responses.map(r => r.json())))
// // все JSON-ответы обработаны, users - массив с результатами
// .then(result => result.forEach(result => alert(result.data[].name)));








// let urls = [
//     'http://api.weatherstack.com/current?access_key=17a677e3fd280a4a116ada9093dfdea0&query=Nizhny Novgorod',
//     'http://api.weatherstack.com/current?access_key=17a677e3fd280a4a116ada9093dfdea0&query=London',
//     'http://api.weatherstack.com/current?access_key=17a677e3fd280a4a116ada9093dfdea0&query=Washington',
//     'http://api.weatherstack.com/current?access_key=17a677e3fd280a4a116ada9093dfdea0&query=Johannesburg',
//     'http://api.weatherstack.com/current?access_key=17a677e3fd280a4a116ada9093dfdea0&query=Brasilia',
//     'http://api.weatherstack.com/current?access_key=17a677e3fd280a4a116ada9093dfdea0&query=Sydney'
// ];

// let requests = urls.map(url => fetch(url));
// Promise.all(requests)
// .then(responses => Promise.all(responses.map(r => r.json())))
// .then(results => results.forEach(result => console.log(result)))
//     // .then(results => results.forEach(result => console.log(result.location.name)))
    

// fetch("https://aerisweather1.p.rapidapi.com/alerts/jordan,mt", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "2e576e053bmsh32d06352ea22cc7p12bd41jsn9ddd722897d0",
// 		"x-rapidapi-host": "aerisweather1.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });




// let url = 'http://api.openweathermap.org/data/2.5/find?lat=56.2&lon=44&cnt=20&appid=a1c23503e3844c136140a0cb126e42d2';

// fetch(url)
//     .then(response =>response.json())
//     .then(result => console.log(result))


  
  