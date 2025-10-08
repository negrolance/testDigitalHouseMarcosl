

var valorDolar = 1;
var valorEuro = 0.87;
var valorPesoArgentino = 1327
var valorReal = 0.2;

/*function setValorPesoArgVsDolar(cantidadPesos) {
    let nuevoValor = (cantidadPesos * valorDolar)/ valorPesoArgentino;
    return nuevoValor;
}

console.log("Valor del peso argentino en dólares: " + setValorPesoArgVsDolar(1327)+ "USD");*/


function calcularTipoDeCambio(cantidad, tipoMoneda) {
    let resultado;
    switch (tipoMoneda) {
        case 'dolar':
            resultado = (cantidad * valorDolar);
            break;
        case 'euro':
            resultado = (cantidad * valorEuro);
            break;
        case 'pesoArgentino':
            resultado = (cantidad * valorPesoArgentino);
            break;
        case 'real':
            resultado = (cantidad * valorReal);
            break;
        default:
            throw new Error("Tipo de moneda no soportado");
    }
    return resultado;
}

console.log("100 dólares en pesos argentinos: " + calcularTipoDeCambio(100, 'pesoArgentino') + " ARS");
console.log("50 euros en dólares: " + calcularTipoDeCambio(50, 'dolar') + " USD");