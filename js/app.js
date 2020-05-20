//variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const enviarBtn = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');

//Listeners
(() => {
  //Inicio de la aplicación y deshabilitar submit
  document.addEventListener('DOMContentLoaded', inicioApp);

  //Campos del formulario
  email.addEventListener('blur', validarCampo);
  asunto.addEventListener('blur', validarCampo);
  mensaje.addEventListener('blur', validarCampo);

  //Botón de enviar en el submit
  formularioEnviar.addEventListener('submit', enviarEmail);

  //Botón de reset formulario
  resetBtn.addEventListener('click', resetFormulario);
  
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

//Cuando se envía el correo
function enviarEmail(form) {
  form.preventDefault();
  //Spinner al presionar enviar
  const spinnerGif = document.getElementById('spinner');
  spinnerGif.style.display = 'block';

  //gif enviado
  const enviado = document.createElement('img');
  enviado.src = 'img/mail.gif';
  enviado.style.display = 'block';

  //ocultar spinner y motrar enviado
  setTimeout(() => {
    spinnerGif.style.display = 'none';
    spinnerGif.parentElement.appendChild(enviado);
    setTimeout(() => {
      enviado.remove();
      formularioEnviar.reset();
    }, 3000);
  }, 2000);
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

//Función para resetear formulario
function resetFormulario(e) {
  e.preventDefault();
  formularioEnviar.reset();
}