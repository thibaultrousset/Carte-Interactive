class Place {
    constructor(latitude, longitude, Titre) {
      this.latitude = latitude;
      this.longitude = longitude;
      this.Titre = Titre;
    }
  }

var myDataArray=[];


d3.csv("data/marseille_services_publics.csv", function(data) {
    for (let i = 0; i < data.length; i++) {
        let place = new Place(data[i].latitude, data[i].longitude, data[i].Titre);
        myDataArray.push(place);
        
        if (place.Titre.indexOf("Bibliothèque")===0) {
            var marker = L.marker([place.latitude, place.longitude]).addTo(librarys);
            let titre=document.createElement('p');
            titre.textContent=myDataArray[i].Titre;
            marker.bindPopup(titre);
            //marker.addTo(mymap);
            
        }

        
    }
});

d3.csv("data/marseille_services_publics.csv", function(data) {
    for (let i = 0; i < data.length; i++) {
        let place = new Place(data[i].latitude, data[i].longitude, data[i].Titre);
        myDataArray.push(place);
        
        if (place.Titre.indexOf("Musé")===0) {
            var marker = L.marker([place.latitude, place.longitude]).addTo(museums);
            let titre=document.createElement('p');
            titre.textContent=myDataArray[i].Titre;
            marker.bindPopup(titre);
            //marker.addTo(mymap);
            
        }

        
    }
});

d3.csv("data/marseille_services_publics.csv", function(data) {
    for (let i = 0; i < data.length; i++) {
        let place = new Place(data[i].latitude, data[i].longitude, data[i].Titre);
        myDataArray.push(place);
        
        if (place.Titre.indexOf("Service")===0) {
            var marker = L.marker([place.latitude, place.longitude]).addTo(services);
            let titre=document.createElement('p');
            titre.textContent=myDataArray[i].Titre;
            marker.bindPopup(titre);
            //marker.addTo(mymap);
            
        }

        
    }
});

d3.csv("data/marseille_services_publics.csv", function(data) {
    for (let i = 0; i < data.length; i++) {
        let place = new Place(data[i].latitude, data[i].longitude, data[i].Titre);
        myDataArray.push(place);
        
        if (place.Titre.indexOf("Direction")===0) {
            var marker = L.marker([place.latitude, place.longitude]).addTo(direction);
            let titre=document.createElement('p');
            titre.textContent=myDataArray[i].Titre;
            marker.bindPopup(titre);
            //marker.addTo(mymap);
            
        }

        
    }
});

var museums = L.layerGroup();
var librarys = L.layerGroup();
var services = L.layerGroup();
var direction = L.layerGroup();

var baseMaps = {
    
};

var overlayMaps = {
    "Bibliothèques": librarys,
    "Musées": museums,
    "Services": services,
    "Direction": direction
};


var mymap = L.map('map').setView([43.2969500, 5.3810700], 13 );

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoidGhpYmF1bHRyb3Vzc2V0IiwiYSI6ImNqY3VrNWJpaTE1NHoyd281MDB4eXh0dGsifQ.vuGVANEn2YR2Pe3tFMPjDg',
    layers: [museums, librarys, services, direction]
}).addTo(mymap);

L.control.layers(baseMaps, overlayMaps).addTo(mymap);
 

   


 

