 const prompt = require("prompt-sync")(); // Importar



let matrizGastos =[
  { semana: "1", 'dia 1': 1, 'dia 2':0, 'dia 3':21, 'dia 4':0, 'dia 5':0, 'dia 6':220, 'dia 7': 10 },
  { semana: "2", 'dia 1': 2, 'dia 2':0, 'dia 3':10, 'dia 4':0, 'dia 5':0, 'dia 6':33, 'dia 7': 0 },
  { semana: "3", 'dia 1': 4, 'dia 2':0, 'dia 3':22, 'dia 4':0, 'dia 5':0, 'dia 6':220, 'dia 7': 10 },
  { semana: "4", 'dia 1': 0, 'dia 2':0, 'dia 3':44, 'dia 4':0, 'dia 5':110, 'dia 6':0, 'dia 7': 10 }
];


function calcularGastoSemanal(matrizGastos, semana) {
    let gastoTotal = 0;
    for (let i = 0; i < matrizGastos.length; i++) {
        if (matrizGastos[i].semana === semana) {
            for (let dia in matrizGastos[i]) {
                if (dia !== 'semana') {
                    gastoTotal += matrizGastos[i][dia];
                }
            }
            return gastoTotal;
        }
    }
    return null;      
}


console.log("Bienvenido a la calculadora de gastos semanales.");
console.log("¿Qué deseas hacer?");
console.log("1. Calcular gasto semanal");
console.log("2. Cargar un nuevo gasto");
console.log("3. Calcular gasto mensual");

let opcion = parseInt(prompt("Ingrese el número de la opción: "));


if (opcion === 1) {
    let nombreSemana = prompt("which semana do you want to calculate the total expense for? (e.g., ' 1'): ");
    let resultado = calcularGastoSemanal(matrizGastos, nombreSemana);
if (resultado === null) {
    console.log("Semana no encontrada.");
} else {
    console.log(`Gasto total de la ${nombreSemana}: ${resultado} USD`);
}
} else if (opcion === 2) {
    let elegirSemana = prompt("Enter the week number (e.g., '1'): ");
    let diaGasto = prompt("Enter the day (e.g., 'dia 1'): ");
    let montoGasto = parseFloat(prompt("Enter the amount spent: "));   
    let semanaEncontrada = false;
    for (let i = 0; i < matrizGastos.length; i++) {
        if (matrizGastos[i].semana === elegirSemana) {
            matrizGastos[i][diaGasto] = (matrizGastos[i][diaGasto] || 0) + montoGasto;
            semanaEncontrada = true;
            break;
        }
    }
    if (!semanaEncontrada) {
        let nuevoRegistro = { semana: elegirSemana, 'dia 1': 0, 'dia 2': 0, 'dia 3': 0, 'dia 4': 0, 'dia 5': 0, 'dia 6': 0, 'dia 7': 0 };
        nuevoRegistro[diaGasto] = montoGasto;
        matrizGastos.push(nuevoRegistro);
    }
    console.log("Gasto agregado exitosamente.");


}else if(opcion === 3){ 
    function calcularGastoMensual(matrizGastos) {
    let gastoTotalMensual = 0;
    for (let i = 0; i < matrizGastos.length; i++) {
        for (let dia in matrizGastos[i]) {
            if (dia !== 'semana') {
                gastoTotalMensual += matrizGastos[i][dia];
            }
        }
    }
    return gastoTotalMensual;
}
    let gastoMensual = calcularGastoMensual(matrizGastos);
    console.log(`Gasto total mensual: ${gastoMensual} USD`);

} else {
    console.log("Opción no válida.");
}


//calculargastomensual

function calcularGastoMensual(matrizGastos) {
    let gastoTotalMensual = 0;
    for (let i = 0; i < matrizGastos.length; i++) {
        for (let dia in matrizGastos[i]) {
            if (dia !== 'semana') {
                gastoTotalMensual += matrizGastos[i][dia];
            }
        }
    }
    return gastoTotalMensual;
}




console.table(matrizGastos);


