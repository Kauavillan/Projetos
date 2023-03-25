const submit = document.querySelector("#submit");

const ip = document.querySelector("#ip");
const city = document.querySelector("#city");
const timezone = document.querySelector("#utc");
const region = document.querySelector("#region");
const postalcode = document.querySelector("#postalcode");
const isp = document.querySelector("#isp");

let lat=0, long=0;


submit.addEventListener("click", verifyAddress);
document.addEventListener('keypress', function(e){
    if(e.key === "Enter") 
        verifyAddress();
    });


function verifyAddress(){
    let htmlInput = document.querySelector("#search");
    let input = htmlInput.value;
    let ipValue = "", domainValue = "";

    input = input.trim();
    if(input.match(/\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/gi) != undefined){
        ipValue = input;
        searchAddress(ipValue);
        htmlInput.value = "";
    }
    else if (input.match(/([\- \w]+\.)+\w{2,3}(\/ [%\-\w]+(\.\w{2,})?)*$/gi) != undefined){
        if(input.match(/((http)|(https)|(ftp))(:\/\/)?/gi)){
            alert("Do not use http://, https:// or ftp://. Please, remove them and try again");
        }
        else{
            domainValue = input;
            searchAddress(undefined, domainValue);
            htmlInput.value = "";
        }
    }
    else{
        alert("Invalid IP or domain. Please, try again.")
    }
}

function searchAddress(ipValue=undefined, domainValue=undefined){
    if(ipValue != undefined){
        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_7QVQBO6bwtU6JECp8kRU7EnIHKvhL&ipAddress=${ipValue}`)
    .then( res => res.json())
    .then((data)=>{
        console.log(data);
        setLocation(data);
    }).catch((err)=>{console.log(err)});
    }
    else{
        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_7QVQBO6bwtU6JECp8kRU7EnIHKvhL&domain=${domainValue}`)
        .then( res => res.json())
        .then((data)=>{
        console.log(data);
        setLocation(data);
        }).catch((err)=>{console.log(err)});
    }
}


function setLocation(data){
    ip.innerHTML = data.ip;
    city.innerHTML = `${data.location.city},`;
    timezone.innerHTML = `UTC ${data.location.timezone}`;
    region.innerHTML = data.location.region;
    isp.innerHTML = data.isp;
    lat = data.location.lat;
    long = data.location.lng;
    var marker = L.marker([lat, long], { icon: customMarker }).addTo(map);
			marker.bindPopup(`Current IP: ${data.ip}`).openPopup();
			map.flyTo([lat, long], 13);
    console.log(data);
}


// Setting map
var map = L.map('map').setView([lat, long], 2);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// Changing marker icon
var customMarker = L.icon({
iconUrl: "./../images/icon-location.svg",
popupAnchor:  [22, -5]
})

