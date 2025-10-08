const submitFunc = (event) => {
    let isValid = validateForm();  // Guardamos el resultado de la validación
    if (!isValid) {
        event.preventDefault();     // Solo se detiene si hay errores
    } else {
        alert('Nombre: ' + document.getElementById('name').value + '\n' +
              'Apellido: ' + document.getElementById('lastname').value + '\n' +
              'Email: ' + document.getElementById('email').value + '\n' +
              'Edad: ' + document.getElementById('age').value + '\n' +
              'Actividad: ' + document.getElementById('job').value + '\n' +
              'Términos y condiciones aceptados: ' + (document.getElementById('inline').checked ? 'Sí' : 'No')
            )('gracias'); ;
    }
}

document.getElementById("form").addEventListener("submit", submitFunc);

function validateForm() {
    const textFields = document.querySelectorAll('input[type="text"]');
    let correctValidation = true;

    textFields.forEach(field => {
        let fieldError = document.getElementById(field.id + 'Error'); // ID directo según HTML

        if(field.value.trim() === '') {
            showError(fieldError, 'Este campo es obligatorio'); 
            correctValidation = false;
        } else if(field.value.length > 0 && field.value.length < 3) {
            showError(fieldError, `El campo debe tener al menos ${field.minLength} caracteres`); 
            correctValidation = false;
        } else {
            clearError(fieldError);
        }
    });

    const emailField = document.getElementById('email');
    let emailError = document.getElementById('emailError');

   if(emailField.value.trim() === '' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
    showError(emailError, 'Por favor, introduce un correo electrónico válido');
    correctValidation = false;
    } else {
       clearError(emailError);
    }

    const ageField = document.getElementById('age');
    let ageError = document.getElementById('ageError');

    const ageValue = parseInt(ageField.value, 10);
    if (isNaN(ageValue) || ageValue < 18) {
    showError(ageError, 'Debes ser mayor de 18 años');
    correctValidation = false;
        } else {
    clearError(ageError);
    }

    const activityField = document.getElementById('job');
    let activityError = document.getElementById('jobError');

    if(activityField.value === '') {
    showError(activityError, 'Por favor, selecciona una actividad');
    correctValidation = false;
        } else {
    clearError(activityError);
}

    const termsField = document.getElementById('inline');
    let termsError = document.getElementById('inlineError');

    if(!termsField.checked) {
        showError(termsError, 'Debes aceptar los términos y condiciones');
        correctValidation = false;
    } else {
        clearError(termsError);
    }

    return correctValidation;  // Retornamos true/false para submitFunc
}






const showError = (element, message) => {
    element.textContent = message;
    element.style.display = 'block';
}

const clearError = (element) => {
    element.textContent = '';
    element.style.display = 'none';
}