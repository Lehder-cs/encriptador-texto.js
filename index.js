
const inputMensaje = document.querySelector("#mensaje");
const inputResultado = document.querySelector("#resultado");
const btnEncriptar = document.querySelector("#encriptarMensaje");
const btnDesencriptar = document.querySelector("#desencriptarMensaje");
const btnCopiar = document.querySelector("#copiarMensaje");
const targeta1 = document.querySelector(".targetas");

//function de encriptar texto
function encriptarMensaje() {
  var mensaje = inputMensaje.value;
  var mayuscula = /[A-Z]/g;
  var caracteresEspeciales = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
  var  digitosNumericos = /[01234567890]/g;

  if (inputMensaje.value == "") {
    Swal.fire({
      icon: 'info',
      showConfirmButton: false,
      text: 'Debes asignar el  texto, que deseas encriptar.',
      width: '60%',
      padding: 0,
      footer: '<span class="infoColor">Esta información es importante.!</span>',
      timer: 2500,
      position: 'center',
      timerProgressBar: true,
      //toast:true,
    });
  } else if (inputMensaje.value.match(mayuscula) != inputMensaje.value.match(mayuscula)) {
    Swal.fire({
      icon: 'warning',
      text: 'No se admite letras en mayúsculas.',
      timer: 3000,
      width: '60%',
      padding: 0,
      timerProgressBar: true,
      showConfirmButton: false,
      footer: '<span class="infoColor">Esta información es importante.!</span>'
    });
  } else if (inputMensaje.value.match(caracteresEspeciales) != inputMensaje.value.match(caracteresEspeciales)) {
    Swal.fire({
      position: 'center',
      icon: 'info',
      text: 'No se admite caracteres especiales ni acentos.',
      timer: 3000,
      width: '60%',
      padding: 0,
      timerProgressBar: true,
      showConfirmButton: false,
      footer: '<span class="infoColor">Esta información es importante.!</span>'
    });

  } else if(inputMensaje.value.match(digitosNumericos) != inputMensaje.value.match(digitosNumericos)){
    Swal.fire({
      position: 'center',
      icon: 'warning',
      text: 'No se admite dígitos númericos, solo letras.',
      timer: 3000,
      width: '60%',
      padding: 0,
      timerProgressBar: true,
      showConfirmButton: false,
      footer: '<span class="infoColor">Esta información es importante.!</span>'
    });
  } 
  else {
    var mensaje = inputMensaje.value;
    var mensajeEncriptado = mensaje
      .toLowerCase()
      .replaceAll("e", "enter")
      .replaceAll("i", "imes")
      .replaceAll("o", "ober")
      .replaceAll("a", "ai")
      .replaceAll("u", "ufat");
    inputResultado.value = mensajeEncriptado;
    inputMensaje.value = "";
    inputResultado.style.backgroundImage = "none";
    document.getElementById("copiarMensaje").style.display = "block";
  }

}
//Function desencriptar
function desencriptarMensaje() {
  if (inputMensaje.value == "") {
    Swal.fire({
      position: 'center',
     icon: 'warning',
      text: 'Asignar un texto, para poder desencriptar.',
      timer: 3000,
      width: '60%',
      padding: 0,
      timerProgressBar: true,
      showConfirmButton: false,
      footer: '<span class="infoColor">Esta información es importante.!</span>'
    });

  }
  var mensajeEncriptado = inputMensaje.value;
  var mensaje = mensajeEncriptado
    .toLowerCase()
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");
  inputResultado.value = mensaje;
  inputMensaje.value = "";
}
//function copiar mensaje encriptado
function copiarMensaje() {
  var copiadoVacio = "";
  var mensajeEncriptado = inputResultado.value;
  navigator.clipboard.writeText(mensajeEncriptado);
  inputResultado.value = "";
  if(inputResultado.value == copiadoVacio) {
    const Toast = Swal.mixin({
      toast: true,
      width: '40%',
      position: 'top-end',
      showConfirmButton: false,
      timer: 600,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      icon:'success',
      text: 'Mensaje copiado.'
    })
  }
}