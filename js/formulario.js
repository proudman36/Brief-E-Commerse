//optener elemento abrir la ventana por su id
const abrir_formulario = document.getElementById('abrir_formulario');
//optener el formulario la ventana por su id
const ventana = document.getElementById('ventana');
//optener elemento enviar la ventana por su id
const enviar = document.getElementById('enviar');

//al boton abrir formulario se le agrega una accion qe al dar click deje ver el formulario
//El método addEventlistener, que indica al navegador que este atento a la interacción del usuario
abrir_formulario.addEventListener('click', () => {
    ventana.classList.add('show');
});


enviar.addEventListener('click', () => {
    ventana.classList.remove('show');
});