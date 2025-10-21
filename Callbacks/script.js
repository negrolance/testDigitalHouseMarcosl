class Calculator {
    constructor(){
        this.num1= 0;
        this.num2= 0;
    }
    setNum1(val1){
        this.num1= Number(val1);
    }

    setNum2(val2){
        this.num2= Number(val2);
    }
    getNum1(){
        return this.num1
    }
    getNum2(){
        return this.num2
    }
    sumar(){
        return this.num1 + this.num2
    }

    restar(){
        return this.num1 - this.num2
    }
    multiplicar(){
        return this.num1 * this.num2
    }

    dividir(){
        if (this.num2 != 0){
            return this.num1/this.num2
        } else{
            return 'no se puede dividir por 0'
        }
    }
}

function realizarOperacion(operacion){
    const calc= new Calculator();

    const num1 = document.getElementById('input1').value;
    const num2 = document.getElementById('input2').value;


    if(num1.trim() =="" || num2.trim() == ""){
        alert ('los campos están incompletos')
        return
    }

    calc.setNum1(num1)

    calc.setNum2(num2)


    let resultado;

    switch(operacion){
        case 'sumar':
            resultado = calc.sumar()
            break
         case 'restar':
            resultado = calc.restar()
            break
         case 'multiplicar':
            resultado = calc.multiplicar()
            break
         case 'dividir':
            resultado = calc.dividir()
            break
        default:
            resultado = 'la propiedad no esta ok'
            break
    
    
    }

    document.getElementById('resultado').innerHTML= `El resultado es ${resultado} esto viene de ${operacion}  
    ${calc.getNum1()} y ${calc.getNum2()}`
}


import message from "./person.js"
console.log (message())

import { otraVariable} from "./person.js";

document.getElementById ('message').innerHTML= message()
document.getElementById ('resultado').innerHTML= otraVariable