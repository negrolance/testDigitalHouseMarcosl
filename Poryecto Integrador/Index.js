 const prompt = require('prompt-sync')({sigint: true});

let tareas= [
    {nombre: "Comprar alimentos", estado: false, fechaLimite: "2023-10-10", categoria: "Hogar"},
    {nombre: "Terminar proyecto", estado: true, fechaLimite: "2023-09-30", categoria: "Trabajo"},
    {nombre: "Estudiar para el examen", estado: false, fechaLimite: "2023-10-05", categoria: "Estudio"},
    {nombre: "Ir al gimnasio", estado: true, fechaLimite: "2023-10-01", categoria: "Salud"},
    {nombre: "Leer un libro", estado: false, fechaLimite: "2023-10-15", categoria: "Ocio"}
];

let categoriasNombre = ["Trabajo", "Hogar", "Estudio", "Salud", "Ocio"];


function todasLasCategorias(){
    console.log("Categorías disponibles:");
    categoriasNombre.forEach((categoria, indice) => {
        console.log(`${indice + 1}. ${categoria}`);
    });
}

function agregarCategoria(){
   let nuevaCategoria = prompt("Ingrese el nombre de la nueva categoría: ");
   if(categoriasNombre.includes(nuevaCategoria)){
    console.log("La categoría ya existe.")} 
    else{
        categoriasNombre.push(nuevaCategoria)
        let newName= nuevaCategoria.toUpperCase();
        console.log("Categoría "+ newName+ " fue agregada exitosamente.");
    return;
    }   
}


// funcion que filtra tareas por categoria

function filtrarTareasPorCategoria(numeroCategoria){
    let tareasFiltradas = tareas.filter(tarea => tarea.categoria === numeroCategoria);
    return tareasFiltradas};

    


//todasLasCategorias();
// Agregar una tarea
function agregarTareas(nombreRecibido, fechaLimiteRecibida){

    todasLasCategorias();

    let numeroCategoria = parseInt(prompt("Seleccione el número de la categoría para la tarea: "));

    if(numeroCategoria >= 0 && numeroCategoria < categoriasNombre.length){
        let categoriaSeleccionada = categoriasNombre[numeroCategoria - 1];

         tareas.push({nombre: nombreRecibido, estado: false, fechaLimite: fechaLimiteRecibida, categoria: categoriaSeleccionada || "Sin categoría" });
            console.log("Tarea agregada en la categoría: " + (categoriaSeleccionada || "Sin categoría"));
    } else{
        console.log("Número de categoría no válido. La tarea se agregará sin categoría.");
    }

};


//Eliminar una tarea

function eliminarTarea(indice){
    if(indice >=0 && indice < tareas.length){
        tareas.splice(indice, 1);
        console.log("tarea eliminada");
    }else{
        console.log("indice no valido"); 
}};

//funcion para marcar tarea como completada
function marcarTareaCompletada(indice){
    if(indice >=0 && indice < tareas.length){
        tareas[indice].estado = true;
        console.log("tarea marcada como completada");
    }else{
        console.log("indice no valido"); 
}};

//funcion para modificar tareas

function modificarTarea(indice, nuevoNombre, nuevaFechaLimite = null, nuevoEstado = null, nuevoNumeroCategoria){
    if (indice >=0 && indice < tareas.length){
        tareas[indice].nombre = nuevoNombre !== undefined ? nuevoNombre : tareas[indice].nombre ;// Modificar nombre si se proporciona uno nuevo el !== distinto de null;
        tareas[indice].fechaLimite = nuevaFechaLimite !== null ? nuevaFechaLimite : tareas[indice].fechaLimite; // Modificar fecha límite si se proporciona una nueva
        tareas[indice].estado = nuevoEstado !== null ? nuevoEstado : tareas[indice].estado; // Modificar estado si se proporciona uno nuevo

        tareas[indice].categoria = nuevoNumeroCategoria !== undefined? nuevoNumeroCategoria : tareas[indice].categoria;

    } else{
            console.log("indice no valido");
        }};

///funcion para ver todas las tareas
function verTareas(){
    if(tareas.length === 0){
        console.log("No hay tareas disponibles.");
    }else{
        tareas.forEach((tarea, indice) => {
            console.log(`${indice}. Nombre: ${tarea.nombre}, Estado: ${tarea.estado ? "Completada" : "Pendiente"}, Fecha Límite: ${tarea.fechaLimite}`);
        });
    }
}


/// cuantas tareas tenes completadas

function contarTareasCompletadas(numeroCategoria){
    let tareasFiltradas= tareas.filter(function(tarea){
        return tarea.categoria === numeroCategoria;
    }); 
    return tareasFiltradas;

    
};


// funcion paque muesta cant de tareas completadas

function contarTareasCompletadas(numeroCategoria){
    let tareasCategoria= filtrarTareasPorCategoria(numeroCategoria);
    let tareasCompletadas = tareasCategoria.reduce(function(contador, tarea){
        return tarea.estado ? contador + 1 : contador;
    },0)
    let tareasEnTotal = tareasCategoria.length; 
    console.log(`En la categoría seleccionada hay ${tareasCompletadas} tareas completadas de un total de ${tareasEnTotal} tareas.`);
};

function tareasNoCompletadas(){
    console.log("Tareas no completadas:");
    tareas.forEach((tarea, indice) => {
        if(!tarea.estado){
            console.log(`${indice}. Nombre: ${tarea.nombre}, Fecha Límite: ${tarea.fechaLimite}`);
        }
    });};  

/// Funcion para ordenar teareas por la propiedad Nombre utilizando bubble sort
/*
function orderTareasPorNombre(){
    let n = tareas.length;
    for (let i=0; i<n-1; i++){
        for (let j=0; j<n-1; j++){
       if (n[j].nombre > n[j+1].nombre){
        let temp =  n[j];
        n[j] = n[j+1];
        n[j+1] = temp;
            }
        }
    }
}*/
function orderTareasPorNombre(){
    let n = tareas.length;
    // primer bucle controla las pasadas
    for (let i = 0; i < n - 1; i++) {
        // segundo bucle compara pares de elementos vecinos
        for (let j = 0; j < n - i - 1; j++) {
            // acá SIEMPRE usamos tareas[j] y tareas[j+1],
            // nunca usamos n[j] ni i+1 fuera del límite
            if (tareas[j].nombre > tareas[j + 1].nombre) {
                let temp = tareas[j];
                tareas[j] = tareas[j + 1];
                tareas[j + 1] = temp;
            }
        }
    }
}
/// Funcion para ordenar teareas por la propiedad Fecha Limite utilizando bubble sort
function orderarTareasPorFechaLimite(){
    let n = tareas.length;
    for (let i = 0; i < n - 1; i++){
        for (let j = 0; j < n - i - 1; j++){
            let fecha1 = new Date(tareas[j].fechaLimite);
            let fecha2 = new Date(tareas[j + 1].fechaLimite);
            
            if (fecha1 > fecha2){
                let temp = tareas[j];
                tareas[j] = tareas[j + 1];
                tareas[j + 1] = temp;
            }
        }
    }
}

/// Funcion que busca una tarea por su nombre y devuelve su índice
function buscarTareaPorNombre(nombreBuscar){
    let inicio=0;
    let fin= tareas.length -1;
    
    while (inicio <= fin){
        let medio = Math.floor((inicio + fin) / 2);
        if (tareas[medio].nombre === nombreBuscar){
            console.log(`La tarea "${nombreBuscar}" se encuentra en el índice ${medio}.`);
            return medio;
        } else if (tareas[medio].nombre < nombreBuscar){
            inicio = medio + 1;
        } else{
            fin = medio - 1;
        }
    }
    console.log(`La tarea "${nombreBuscar}" no se encuentra en la lista.`);
    return -1;

}

/// funcion para menu de opciones
function menu(){
    console.log("==================================");
    console.log("Menú de opciones:");
    console.log("1. Agregar tarea");
    console.log("2. Eliminar tarea");
    console.log("3. Marcar tarea como completada");
    console.log("4. Modificar tarea");
    console.log("5. Ver todas las tareas");
    console.log("6. Agregar categoría");
    console.log("7. Ver categorías");
    console.log("8. Filtrar tareas por categoría");
    console.log("9. Contar tareas completadas por categoría");
    console.log("10. Ver tareas no completadas");
    console.log("11. Ordenar tareas por nombre");
    console.log("12. Ordenar tareas por fecha límite");
    console.log("13. Buscar tarea por nombre");
    console.log("==================================");
    console.log("0. Salir");
}
// funcion principal para ejecutar el programa
function interactuarConElUsuario(){
    const prompt = require('prompt-sync')({sigint: true});
    let opcion;
    do{
        menu();
        opcion = prompt("Seleccione una opción: ");
        switch(opcion){
            case '1':
                let nombreTarea = prompt("Ingrese el nombre de la tarea: ");
                let fechaLimite = prompt("Ingrese la fecha límite (YYYY-MM-DD): ");
                agregarTareas(nombreTarea, fechaLimite);
                console.log("Tarea agregada exitosamente.");
                break;
            case '2':
                let indiceEliminar = parseInt(prompt("Ingrese el índice de la tarea a eliminar: "));
                eliminarTarea(indiceEliminar);
                break;
            case '3':
                let indiceCompletar = parseInt(prompt("Ingrese el índice de la tarea a marcar como completada: "));
                marcarTareaCompletada(indiceCompletar);
                break;
            case '4':
                let indice = parseInt(prompt("Ingrese el índice de la tarea a modificar: "));

                if(indice>= 0 || indice >= tareas.length) {
                    console.log("1. Modificar nombre");
                    console.log("2. Modificar fecha límite");
                    console.log("3. Modificar categoría");
                    let subOpcion = parseInt(prompt("Seleccione el número de la propiedad a modificar: "));

                    switch(subOpcion){
                        case '1':
                            let nuevoNombre = prompt("Ingrese el nuevo nombre de la tarea: ");
                            modificarTarea(indice, nuevoNombre);
                            break;
                        case '2':
                            let nuevaFechaLimite = prompt("Ingrese la nueva fecha límite (YYYY-MM-DD): ");
                            modificarTarea(indice, undefined, nuevaFechaLimite);
                            break;
                        case '3':
                            let nuevaCategoria = parseInt(prompt("Ingrese la nueva categoría: "));
                            if( nuevaCategoria >= 0 && nuevaCategoria < categoriasNombre.length){
                                nuevaCategoria = categoriasNombre[nuevaCategoria - 1];
                            } else{
                                console.log("Número de categoría no válido. La tarea se modificará sin categoría.");
                                nuevaCategoria = "Sin categoría";
                            }               
                            modificarTarea(indice, undefined, undefined, undefined, nuevaCategoria);
                            break;
                    }
                }else{
                    console.log("Índice no válido.");
                    break;
                }
/*
                let nuevoNombre = prompt("Ingrese el nuevo nombre de la tarea: ");
                let nuevaFechaLimite = prompt("Ingrese la nueva fecha límite (YYYY-MM-DD) o presione Enter para no cambiar: ");
                let nuevoEstadoInput = prompt("Ingrese el nuevo estado (true/false) o presione Enter para no cambiar: ");
                let nuevoEstado = null;
                if (nuevoEstadoInput.toLowerCase() === 'true'){
                    nuevoEstado = true;
                } else if (nuevoEstadoInput.toLowerCase() === 'false'){
                    nuevoEstado = false;
                }
                modificarTarea(indiceModificar, nuevoNombre, nuevaFechaLimite || null, nuevoEstado);
                break;*/
            case '5':
                verTareas();
                break;
            case '6':
                agregarCategoria();
                break;
            case '7':
                todasLasCategorias();
                break;

            case '8':
                todasLasCategorias();
                let numeroCategoriaFiltrar = parseInt(prompt("Seleccione el número de la categoría para filtrar las tareas: "));
                let tareasFiltradas = filtrarTareasPorCategoria(numeroCategoriaFiltrar);
                if(tareasFiltradas.length === 0){
                    console.log("No hay tareas en esta categoría.");
                } else{
                    console.log("Tareas en la categoría seleccionada:");
                    tareasFiltradas.forEach((tarea, indice) => {
                        console.log(`${indice}. Nombre: ${tarea.nombre}, Estado: ${tarea.estado ? "Completada" : "Pendiente"}, Fecha Límite: ${tarea.fechaLimite}`);
                    });
                }
                 break;
            case '9':
                todasLasCategorias();
                let numeroCategoriaContar = parseInt(prompt("Seleccione el número de la categoría para contar las tareas completadas: "));
                contarTareasCompletadas(numeroCategoriaContar);
  
                break;
            case '10':
                tareasNoCompletadas();
                break;
            case '11':
                orderTareasPorNombre();
                console.log("Tareas ordenadas por nombre.");
                console.log(tareas);
                break;
            case '12':
                orderarTareasPorFechaLimite();
                console.log("Tareas ordenadas por fecha límite.");
                console.log(tareas);
                break;

            case '13':
                orderTareasPorNombre
                let nombreBuscar = prompt("Ingrese el nombre de la tarea a buscar: ");
                buscarTareaPorNombre(nombreBuscar);
                console.log("Búsqueda completada.");
                break;
            case '0':
                console.log("Saliendo del programa...");
                break;
            default:
                console.log("Opción no válida. Intente de nuevo.");
        }
    }while(opcion !== '0');
};

interactuarConElUsuario();