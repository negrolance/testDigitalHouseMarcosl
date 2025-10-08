const prompt = require('prompt-sync')({sigint: true});


let persona1={
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero"};


delete persona1.profesion;

persona1.habilidad = "Programador";

console.log(persona1);

persona1.ubicacion = {
    ciudad: "Barcelona",
    pais: "España",
    codigoPostal: "08001"
};

console.log(persona1);

function eliminarPropiedad(objeto, propiedad) {
    switch(propiedad) {
        case 'nombre':
            delete objeto.nombre;
        break;
        case 'profesion':
            delete objeto.profesion;
        break;
        case 'edad':
            delete objeto.edad;
        break;
        case 'habilidad':
            delete objeto.habilidad;
        break;
        case 'ubicacion':
            delete objeto.ubicacion;
        break;
        default:
            console.log("La propiedad no existe en el objeto.");
    }};

eliminarPropiedad(persona1, 'ubicacion');
    console.log(persona1);