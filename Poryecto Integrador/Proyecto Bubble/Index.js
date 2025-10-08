prompt = require('prompt-sync')({sigint: true});



let array = [ 14,3,45,67,89,23,1,5,7,9,20];


function busquedaLineal(array, elementoBuscado) {
for(let i=0; i<array.length; i++){
    if(array[i] === elementoBuscado){
        console.log("El elemento " + elementoBuscado + " se encuentra en la posición " + i);
        return i;
    }if(i === array.length -1){
        console.log("El elemento " + elementoBuscado + " no se encuentra en el array");
    }
}

}

let elementoBuscado = parseInt(prompt("Ingrese el número que desea buscar en el array: "));
busquedaLineal(array, elementoBuscado);

/*

Linear Search

---Explicación---

El algoritmo de búsqueda lineal recorre cada elemento del array uno por uno, comparándolo con el elemento buscado. Si encuentra una coincidencia, devuelve la posición del elemento en el array. Si no encuentra el elemento después de recorrer todo el array, devuelve -1.

---Código---

let array = [ 14,3,45,67,89,23,1,5,7,9,20];
let elemntoBuscado = 311;

function busquedaLineal(array, elemntoBuscado) {
for(let i=0; i<array.length; i++){
    if(array[i] === elemntoBuscado){

        posicion = i;
        console.log("El elemento " + elemntoBuscado + " se encuentra en la posición " + posicion);
        break;
    }if(i === array.length -1){
        console.log("El elemento " + elemntoBuscado + " no se encuentra en el array");
    }
}

}

busquedaLineal(array, 20);



Si no colocamos el return -1, la función devolverá undefined cuando el elemento no se encuentre en el array, lo que puede llevar a confusión al interpretar los resultados de la búsqueda.

---Salida sin -1---
El elemento 7 no se encuentra en el array
El elemento 7 no se encuentra en el array
El elemento 7 no se encuentra en el array
El elemento 7 no se encuentra en el array
El elemento 7 no se encuentra en el array
El elemento 7 no se encuentra en el array
El elemento 7 no se encuentra en el array
El elemento 7 no se encuentra en el array
El elemento 7 se encuentra en la posición 8

-- Salida con  -1 --
El elemento 7 se encuentra en la posición 8
marcoslancellotti@Marcoss-MacBook-Air Proyecto Bubble % 


colocamos el function para poder reutilizar el código y no repetirlo cada vez que queramos buscar un elemento en un array.
*/