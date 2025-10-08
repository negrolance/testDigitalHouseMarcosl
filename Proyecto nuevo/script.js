/*const ready = confirm ("¿Desea continuar?");

console.log (ready);
console.log ("La constante Ready es un: " + typeof ready);
if (ready) {
    const userName= prompt ("Ingrese su nombre");
    alert ("¡Gracias por continuar!");
    console.log (userName);
    console.log("La constante userName es un: " +typeof userName);
} else {
    alert ("¡Lamentamos que no quiera continuar!");
    window.location.replace("http://www.w3schools.com");;
}*/


const array = [ "HTML", "CSS", "JavaScript", "React", "NodeJS"];
const object = {
    nombre: "Marcos",
    edad: 30,
    ciudad: "Buenos Aires",
    profesion: "Desarrollador Web",
    materia: "JS para DOM"

};

const objectArray = [
    {
        nombre: "Marcos",
        edad: 30,
        ciudad: "Buenos Aires",
        profesion: "Desarrollador Web",
        materia: "JS para DOM"
    },
    {
        nombre: "Ana",
        edad: 25,
        ciudad: "Córdoba",
        profesion: "Diseñadora Web",
        materia: "UX/UI"
    },
    {
        nombre: "Luis",
        edad: 28,
        ciudad: "Rosario",
        profesion: "Desarrollador Backend",
        materia: "NodeJS"
    }
];

console.log (array);
console.log (object);
console.log (objectArray);
console.log ("El array es un: " + typeof array);
console.log ("El object es un: " + typeof object);
console.log ("El objectArray es un: " + typeof objectArray);