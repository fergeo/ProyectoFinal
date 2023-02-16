var peticion;
var datos;
var emails = [];
var exprecionReg;
var valido;
var contrasena;
var nombreApellido;
var correoElectronico;
var mensaje = 'Debe ingresar';

function validar(formulario) {
    
    //Validacion de la correo
      if( formulario.inputEmail.value ){
    
      //Expresion regular del correo
        exprecionReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        valido = exprecionReg.test(formulario.inputEmail.value);
        if(valido==false){
          alert('Correo invalido. Ingrese correctamente el correo electronico');
        }
      
      }else{
        mensaje = mensaje + ' un correo electronico,'
    }  

        //Carga los datos que estan en el JSON
        peticion = new XMLHttpRequest();
        peticion.open('GET','http://127.0.0.1:5500/info.json');
       
        peticion.onload = function(){
          
            if( peticion.status == 200 ){
          
                //Guarda el resultado en variables
                datos = JSON.parse(peticion.response);
          
                datos.emails.forEach(function(element){
                    emails.push(element);  
                });
    
    
                emails.forEach(function(element){
                    if(element.emails == formulario.inputEmail.value){
                        nombreApellido = element.nomyape;
                        correoElectronico = formulario.inputEmail.value;
                    }

                });
    
            }  
        };
        peticion.send();  

        if(nombreApellido.length() > 0){
            "index.html?nomyape=${nombreApellido},emails=${correoElectronico}"
        } else{
            "No existe"
        }
    
}



