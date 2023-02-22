var peticion;
var datos;
var emails = [];
var exprecionReg;
var valido;
var contrasena;
var nombreApellido = [];
var correoElectronico;
var mensaje = '';

function validar(formulario) {
  
  //Validacion de la correo
  if( formulario.inputEmail.value ){
    
    //Expresion regular del correo
    exprecionReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    valido = exprecionReg.test(formulario.inputEmail.value);
    if(valido==false){
      mensaje ='Correo invalido. Ingrese correctamente el correo electronico.';
    }
        
  }else{
    mensaje = mensaje + 'Debe ingresar un correo electronico.';
  }  


  if( mensaje.length == 0 )
  {
    //Carga los datos que estan en el JSON
    peticion = new XMLHttpRequest();
    peticion.open('GET','http://127.0.0.1:5500/emailsValidos.json');
         
    peticion.onload = function(){
      if( peticion.status == 200 ){
            
        //Guarda el resultado en variables
        datos = JSON.parse(peticion.response);
            
        datos.emails.forEach(function(element){
         emails.push(element);  
        });
      
        emails.forEach(function(element){
          if(element.email == formulario.inputEmail.value && element.password == formulario.inputPassword.value){
            nombreApellido = element.nomyape;
            correoElectronico = formulario.inputEmail.value;
          }
        });

        if(nombreApellido.length > 0){
          window.location.href = "curriculum.html?email=" + correoElectronico
        } else{
          alert("Verifique Email y Contraseña")
        }
      }  
    };
    peticion.send();  
  } else {
    alert(mensaje)  
  }
  alert(" ")
}



