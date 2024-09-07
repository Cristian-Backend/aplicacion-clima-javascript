let api_key = '94c4f0e22099b52375156733fe26b445';
let defKelvin = 273.15;
let urlBase = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value;

    if (ciudad) {
        fetchDatosClima(ciudad);
    }
});

function fetchDatosClima(ciudad) {
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
        .then(response => response.json())
        .then(data => mostrarDatosClima(data));
}

function mostrarDatosClima(data) {
    const divDatosClima = document.getElementById('datosClima');
    divDatosClima.innerHTML = '';

    const ciudadNombre = data.name;
    const humedad = data.main.humidity;
    const paisNombre = data.sys.country;
    const temperatura = data.main.temp - defKelvin;
    const descripcion = data.weather[0].description;
    const icono = data.weather[0].icon;

    const ciudadTitulo = document.createElement('h2');
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`;

    const temperaturaInfo = document.createElement('p');
    temperaturaInfo.textContent = `La Temperatura es: ${temperatura.toFixed(1)}°C`; // Redondea a un decimal

    const iconoInfo = document.createElement('img');
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`;

    const descripcionInfo = document.createElement('p');
    descripcionInfo.textContent = `La descripcion meteorologica es ${descripcion}`;

    const humedadInfo = document.createElement('p');
    humedadInfo.textContent = `La Humedad es: ${humedad}%`;

    // subimos todo al div que esta vacio.
    divDatosClima.appendChild(ciudadTitulo);
    divDatosClima.appendChild(temperaturaInfo);
    divDatosClima.appendChild(descripcionInfo);
    divDatosClima.appendChild(iconoInfo);
    divDatosClima.appendChild(humedadInfo);
}

