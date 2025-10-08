const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const age = document.getElementById('age');

const saveBTN=()=>{
    const user = {
        firstname: firstname.value,
        lastname: lastname.value,
        age: age.value
    }
    localStorage.setItem('user', JSON.stringify(user));
    firstname.value = '';
    lastname.value = '';
    age.value = '';
    document.getElementById('userData').innerHTML=`Usuario guardado:
                    
            <p>Nombre: ${user.firstname}</p>
            <p>Apellido: ${user.lastname}</p>
            <p>Edad: ${user.age}</p>
        `

}

const deleteBTN=()=>{
    localStorage.clear('user');
    document.getElementById('userData').innerHTML ='se borro el usuario';
}

const showBTN=()=>{
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
        document.getElementById('userData').innerHTML = `
            <p>Nombre: ${user.firstname}</p>
            <p>Apellido: ${user.lastname}</p>
            <p>Edad: ${user.age}</p>
        `;
    } else {
        document.getElementById('userData').innerHTML ='No hay usuario guardado';
    }
}


console.log(localStorage);

const variable = 'hola';
const texto = `esto es un texto y una variable: ${variable}`;
console.log(texto);

const object = {
    nombre: 'juan',
    apellido: 'perez',
    edad: 30,
    direccion: {
        calle: 'Calle Falsa 123',
        ciudad: 'Springfield'
    }
}
const array = [1, 2, 3, 4, 5];
console.log(array);
console.log(object);
console.log(`Nombre: ${object.nombre}, Apellido: ${object.apellido}, Edad: ${object.edad}, Calle: ${object.direccion.calle}, Ciudad: ${object.direccion.ciudad}`);

const css = `color: red; font-size: 20px; background-color: yellow; padding: 10px; border-radius: 5px;`;
console.log('%cEste es un mensaje con estilo', css);

const a= 5
const b= 10
console.log(`Suma: ${a+b}, Resta: ${a-b}, Multiplicacion: ${a*b}, Division: ${a/b}`);


console.assert (a+b==11, 'La suma es incorrecta');

console.time('Tiempo de ejecucion');
for(let i=0; i<100000; i++){
    for (let j=0; j<100000; j++){
        const element = array [i];}
}
console.timeEnd('Tiempo de ejecucion');

var timeout = 3000;
const doAnAction = () => {
    setTimeout(() => {
       console.log(`Accion realizada despues de ${timeout} segundos`); 
    }, timeout);
}

const doAnAction2 = () => {
const interval = setInterval(() => {
    console.log(`Accion realizada cada ${timeout} segundos`); 
 }, timeout);
 setTimeout(() => {
    console.log('Se detuvo la ejecucion del interval');
    clearInterval(interval);
    clearTimeout(interval);
}, timeout * 3); 

}
