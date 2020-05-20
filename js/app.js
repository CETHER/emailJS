//variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const enviarBtn = document.getElementById('enviar');

//Listeners
(() => {
  //Inicio de la aplicación y deshabilitar submit
  document.addEventListener('DOMContentLoaded', inicioApp);

  //Campos del formulario
  email.addEventListener('blur', validarCampo);
  asunto.addEventListener('blur', validarCampo);
  mensaje.addEventListener('blur', validarCampo);

  //Botón de enviar en el submit
  
})();


//Funciones
function inicioApp() {
  //deshabilitar el envio
  enviarBtn.disabled = true;
}

//Valida que el campo tenga algo escrito
function validarCampo() {
  //Se valida la longitud del texto y que no esté vacío
  validarLongitud(this);

  //Validar únicamente email
  if (this.id === 'email') {
    validarEmail(this);
  }
  //Habilitar botón
  let errores = document.querySelectorAll('.error');
  if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
    if (errores.length === 0) {
      enviarBtn.disabled = false;
    }
  }
}

// Función para validar la lingitud de un campo, si está o no vacío
function validarLongitud(campo) {  
  if (campo.value.length > 0) {
    //Agregar un borde verde, y quita la clase error
    campo.style.borderBottomColor = 'green';    
    campo.classList.remove('error');
  } else {
    //Agregar un borde rojo, y agrega la clase error
    campo.style.borderBottomColor = 'red';    
    campo.classList.add('error');
  }
}

//Función para validar Email
function validarEmail(email) {
  const texto = email.value;
  if (texto.indexOf('@') !== -1) {
    email.style.borderBottomColor = 'green';    
    email.classList.remove('error');
  } else {
    email.style.borderBottomColor = 'red';    
    email.classList.add('error');
  }
}