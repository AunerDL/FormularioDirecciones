var paises = {
    'Mexico': {
        'Tamaulipas': {
            'Tampico':['Miramar','Tampico Centro'], 
            'Ciudad Victoria':['Aldolfo Lopez Mateos','Colonias del Rey']
        },
        'Hidalgo': {
            'Tula':['San Marcos','La malinche'], 
            'Atotonilco':['Vito','Texas']
        }
    },
    'USA': {
        'California': {
            'Los Angeles':['Hollywood','Santa Monica'], 
            'San Francisco':['Chinatown','North Beach']
        },
        'New York': {
            'New York City':['brooklyn','Manhattan'], 
            'Buffalo':['Allentown','Riverside']
        }
    },
    'Rusia':{
        'Moscow':{
            'Moscow':['Arbat','Presnensky'],
            'Sochi':['Adler','Khosta']
        },
        'St. Petersburg':{
            'St.Petersburg':['Vasilyevsky Island','Vyborgsky District','Kolpinsky District']
        }
    }
};

function updateSelect(element, options) {
    element.innerHTML = '';
    element.disabled = false;
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement('option');
        option.value = options[i];
        option.text = options[i];
        element.appendChild(option);
    }
}

function updateSelect(element, options) {
    element.innerHTML = '';
    element.disabled = false;
    for (var i = 0; i < options.length; i++) {
        var option = document.createElement('option');
        option.value = options[i];
        option.text = options[i];
        element.appendChild(option);
    }
    if (element.id !== 'pais') { // Si no es el selector de país, agrega una opción vacía al principio
        element.insertBefore(new Option('Selecciona una opcion', ''), element.firstChild);
        element.selectedIndex = 0; // Resetea el selector a la opción vacía
    }
}

// Cuando se selecciona un país
document.getElementById('pais').addEventListener('change', function() {
    var estados = paises[this.value];
    updateSelect(document.getElementById('estado'), Object.keys(estados));
    // Resetea los selectores de municipio y localidad
    updateSelect(document.getElementById('municipio'), []);
    updateSelect(document.getElementById('localidad'), []);
    document.getElementById('municipio').disabled = true;
    document.getElementById('localidad').disabled = true;
});

// Cuando se selecciona un estado
document.getElementById('estado').addEventListener('change', function() {
    var paisSeleccionado = document.getElementById('pais').value;
    var municipios = paises[paisSeleccionado][this.value];
    updateSelect(document.getElementById('municipio'), Object.keys(municipios));
    updateSelect(document.getElementById('localidad'), []); // Resetea el selector de localidad
    document.getElementById('localidad').disabled = true;
});

// Cuando se selecciona un municipio
document.getElementById('municipio').addEventListener('change', function() {
    var paisSeleccionado = document.getElementById('pais').value;
    var estadoSeleccionado = document.getElementById('estado').value;
    var localidades = paises[paisSeleccionado][estadoSeleccionado][this.value];
    updateSelect(document.getElementById('localidad'), localidades);
});

// Cargar los países al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    updateSelect(document.getElementById('pais'), Object.keys(paises));
    // Inicializa los otros selectores como deshabilitados
    updateSelect(document.getElementById('estado'), []);
    document.getElementById('estado').disabled = true;
    updateSelect(document.getElementById('municipio'), []);
    document.getElementById('municipio').disabled = true;
    updateSelect(document.getElementById('localidad'), []);
    document.getElementById('localidad').disabled = true;
});

document.getElementById('guardar').addEventListener('click', function() {
    var pais = document.getElementById('pais').value;
    var estado = document.getElementById('estado').value;
    var municipio = document.getElementById('municipio').value;
    var localidad = document.getElementById('localidad').value;

    document.getElementById('resultadoPais').textContent = 'País: ' + pais;
    document.getElementById('resultadoEstado').textContent = 'Estado: ' + estado;
    document.getElementById('resultadoMunicipio').textContent = 'Municipio: ' + municipio;
    document.getElementById('resultadoLocalidad').textContent = 'Localidad: ' + localidad;

    document.getElementById('resultados').style.display = 'block';
});
