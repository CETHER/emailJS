//variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const enviarBtn = document.getElementById('enviar');

//Listeners
(() => {
  //Inicio de la aplicación y deshabilitar submit
  document.addEventListener('DOMContentLoaded', inicioApp);
  
})();


//Funciones
function inicioApp() {
  //deshabilitar el envio
  enviarBtn.disabled = true;
}
