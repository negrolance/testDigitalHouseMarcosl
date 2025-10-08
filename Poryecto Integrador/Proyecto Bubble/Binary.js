const prompt = require("prompt-sync")();



let obtenerVotos=[
    { nombre: "tema1", votos: 1000},
    { nombre: "tema2", votos: 1200},
    { nombre: "tema3", votos: 3000},
    { nombre: "tema4", votos: 500},
    { nombre: "tema5", votos: 10000}

]



/*for (let j=0; j< obtenerVotos.length;j++){
    for(let i=0; i< obtenerVotos.length-1;i++){
        if (obtenerVotos[i].votos< obtenerVotos [i+1].votos){
            let temp = obtenerVotos[i];
            obtenerVotos[i]= obtenerVotos[i+1];
            obtenerVotos[i+1]= temp; 
        }
        
    }
}*/
function ordenarVotos(obtenerVotos, target) {
  // Recorremos el array desde el primer elemento hasta el último
  for (let i = 0; i < obtenerVotos.length; i++) {
    // Comparamos el elemento actual con el target
    if (obtenerVotos[i].nombre == target) {
      return obtenerVotos[i].votos; // Si son iguales, devolvemos la posición (índice) donde se encontró
    }
  }
  return -1; // Si terminamos el bucle y no lo encontramos, devolvemos -1
}
console.log("Elegí un tema de la lista:");
for (let i = 0; i < obtenerVotos.length; i++) {
    console.log((i + 1) + ". " + obtenerVotos[i].nombre);
}

let opcion = parseInt(prompt("Ingrese el número de la opción: "));

let seleccionada = obtenerVotos[opcion - 1].nombre;
console.log("la cantidad de votos que tuvo fue "+ordenarVotos(obtenerVotos, seleccionada));