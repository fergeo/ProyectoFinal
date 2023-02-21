var peticion;
var datos;
var postulante;
var imagen;
var correo;
var celular;
var direccion;
var parametros;


//Carga los datos que estan en el JSON
peticion = new XMLHttpRequest();
peticion.open('GET','https://randomuser.me/api/');
         
peticion.onload = function(){

    if( peticion.status == 200 ){

        //Guarda el resultado en variables
        datos = JSON.parse(peticion.response);

        postulante = document.getElementById('postulante');
        postulante.innerHTML = datos.results[0].name.first + " " + datos.results[0].name.last;  

        imagen = document.getElementById('imagen');
        imagen.innerHTML =  `<img src="${datos.results[0].picture.large}" alt="Problemas al cargar">`;

        parametros =  new URLSearchParams(window.location.search);
        correo = document.getElementById('correoElectronico');
        correo.innerHTML = parametros.get('email');

        //Celular
        celular = document.getElementById('celular');
        celular.innerHTML =  datos.results[0].cell;   

        //Direccion
        direccion = document.getElementById('direccion');
        direccion.innerHTML =  datos.results[0].location.street.number + "  " + datos.results[0].location.street.name + " , " + datos.results[0].location.city; 
    }  
};
peticion.send();  





