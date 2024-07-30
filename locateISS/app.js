//Making a map and tiles
const map = L.map('map').setView([0, 0], 1);
const attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileURL = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileURL , { attribution });
tiles.addTo(map);

//Making a marker with a custom Icon
const issIcon = L.icon({
    iconUrl: 'ISS.png',
    iconSize: [50, 32],
    iconAnchor: [25, 16],
   
});
const marker = L.marker([0, 0],{icon: issIcon}).addTo(map);



//assigning the api url to a global variable
const URL = 'https://api.wheretheiss.at/v1/satellites/25544';
//defining an async await function to fetch data from the api 

let firstTime = true;
async function getISS(){
    const response = await fetch(URL);
    const data = await response.json();
    //javascript destructuring
    const {latitude , longitude} = data;

    //L.marker([latitude, longitude]).addTo(map);
    marker.setLatLng([latitude, longitude]);
    if(firstTime){
        map.setView([latitude, longitude], 2);
        firstTime = false;
    }
    document.getElementById('lat').textContent= latitude.toFixed(2);
    document.getElementById('lon').textContent= longitude.toFixed(2);

    console.log(latitude);
    console.log(longitude);
}

getISS();
setInterval(getISS, 1000);
