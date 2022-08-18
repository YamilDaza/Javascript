let marker, map;

function initMap(){
    console.log('Inicializando Mapa...');

    const posicion = (lat,lng) => {
        return {
            lat:lat,
            lng:lng,
        }
    };

    map = new google.maps.Map(document.getElementById('map'), {
        zoom:4,
        center:posicion(-25.344, 131.031),
    });
    marker = new google.maps.Marker({
        position: posicion(-25.344, 131.031),
        map,
        title: '1er Lugar favorito',
    });

    map = new google.maps.Map(document.getElementById('map'), {
        zoom:4,
        center:posicion(25.344, 137.031),
    });
    markerTwo = new google.maps.Marker({
        position: posicion(12.344, 11.031),
        map,
        title: '2do Lugar favorito',
    });

    map = new google.maps.Map(document.getElementById('map'), {
        zoom:4,
        center:posicion(25.344, 137.031),
    });
    markerThree = new google.maps.Marker({
        position: posicion(24.231, 08.232),
        map,
        title: '2do Lugar favorito',
    });
    

    // Acceder al geolocalizados del navegador
    // Obtener la geolocalizacion
    // marker.setPosition({ lat, lng});
    // geoPosicion()

};

function geoPosicion(){
    if(navigator.geolocation){
        const geoLoc = navigator.geolocation;
        const options = { timeout: 60000 };
        const matchPos = geoLoc.watchPosition( centraMapa, onError, options)
    } else {
        alert('Tu navegador no admite geolocalizacion');
    }
}

function centraMapa(position){
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
    }
    console.log(nuevaPos);
    marker.setPosition(nuevaPos);
    map.setCenter(nuevaPos);
}

function onError(error){
    console.error(error);
}