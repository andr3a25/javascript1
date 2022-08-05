/**
 * practica de POO usando canvas
 * HTML
 * 2022/08/05
 * 
 */




/* CARGAR RECURSOS*/

var canvas = document.getElementById("canvas"); // el primer canvas esta trayendo la memoria de java el  nombre del documento el identificador es canvas en html
var ctx = canvas.getContext("2d"); // ctx contexto de dibujo en canvas, 2d dos dimensiones 


/**VALORES INICIALES*/

var centro = {x: 100, y: 100}; //las llaves indican que es un objeto llamado centro con dos propiedades x ,y
var radio = 90; //se define el radio
var vel = {x: 5, y: 2}

animar();


/* DIBUJAR EL MUNDO*/

function dibujar() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();//metodo beginpath 
    ctx.arc(centro.x, centro.y, radio, 0, 2 * Math.PI);// los dos primeros numeros equivalen al centro, 40 es el radio, 0 en el angulo 0 comienza a dibujar (horizontal a la derecha), 2*pi cuantos grados se va a dibujar
    ctx.stroke();//se cierra el metodo beginç
    ctx.linewidth = 3; //ancho de linea 
    ctx.strokeStyle  = 'green'; //estilo 
    
    
}


/* CALCULAR VALORES*/

function calcular() {

    centro.x += vel.x;
    centro.y += vel.y;
  
//controlar rebote 

    //concatenar para controlar rebote 

    if(centro.x >= canvas.width - radio || centro.x + vel.x < radio){ //el centro del circulo debe ser menor que el radio, asi cuando vaya a tocar el borde canva pare y se redireccione
        vel.x*=-1;
    }
    if(centro.y >= canvas.height - radio  || centro.y + vel.y < radio){
        vel.y*=-1;
    }

    //forma larga de controlar rebote

    /*if(centro.x >= canvas.width){
        vel.x*=-1;
    }
    if(centro.y >= canvas.height){
        vel.y*=-1
    }
    if (centro.x <=0){
        vel.x*=-1
    }
    if (centro.y <=0){
        vel.y*=-1
    }*/
}


/* CICLO DE ANIMACION*/

function animar() {

    dibujar();
    calcular();
    requestAnimationFrame(animar); //se recalcula y se queda en el ciclo infinito

}