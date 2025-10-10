document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const passwordConfirm = document.getElementById("confirmPassword");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    const showHideButton = document.getElementById('show-hide')

    // Enviar formulario
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); 
        validateForm();
    });

    // Validar email al salir del campo
    emailInput.addEventListener("blur", function () {
        validateEmail();
    });

    // Limpiar errores cuando cambia el valor
    emailInput.addEventListener("change", function () {
        clearError(emailError);
    });

    passwordInput.addEventListener("change", function () {
        clearError(passwordError);
    });

    passwordConfirm.addEventListener("change", function () {
        clearError(confirmPasswordError);
    });

    showHideButton.addEventListener('click', function(){
        if (passwordInput.type == "password"){
            passwordInput.type ="text";
            passwordConfirm.type="text"
        } else {
            passwordInput.type ="password";
            passwordConfirm.type="password"
        } 
    })




    // Validar todo el formulario
    function validateForm() {
        const isValidEmail = validateEmail();
        const isValidPassword = validatePassword();
        const isValidConfirmPassword = validateConfirmPassword();

        if (isValidEmail && isValidPassword && isValidConfirmPassword) {
            saveToLocalStorage();
            alert("Has ingresado con éxito");

            // Aquí podrías guardar los datos en localStorage si quisieras:
            // localStorage.setItem("user", JSON.stringify({ email: emailInput.value }));
        }
    }

    // Validación de email
    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailValue = emailInput.value.trim();

        if (!emailRegex.test(emailValue)) {
            showError(emailError, "Por favor, ingresa un correo electrónico válido.");
            return false;
        } else {
            clearError(emailError);
            return true;
        }
    }

    // Validación de contraseña
    function validatePassword() {
        const passwordValue = passwordInput.value.trim();
        if (passwordValue.length < 8) {
            showError(passwordError, "La contraseña debe tener al menos 8 caracteres.");
            return false;
        } else {
            clearError(passwordError);
            return true;
        }
    }

    // Validación de confirmación de contraseña
    function validateConfirmPassword() {
        const passwordValue = passwordInput.value.trim();
        const confirmPasswordValue = passwordConfirm.value.trim();

        if (passwordValue !== confirmPasswordValue) {
            showError(confirmPasswordError, "Las contraseñas no coinciden.");
            return false;
        } else {
            clearError(confirmPasswordError);
            return true;
        }
    }

    // Mostrar error
    function showError(errorElement, message) {
        errorElement.textContent = message;
        errorElement.style.display = "block";
    }

    // Limpiar error
    function clearError(errorElement) {
        errorElement.textContent = "";
        errorElement.style.display = "none";
    }

    function saveToLocalStorage (){
        const emailValue = emailInput.value.trim();
        localStorage.setItem('email', emailValue)
        //ToDoJSON
        const body= bodyBuilderJSON();
        console.log (body);

    }

    function bodyBuilderJSON (){
        return{
        "email": emailInput.value,
        "password": passwordInput.value
    }
    }

});