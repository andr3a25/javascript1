/** estos son comentarios multilinea
 * practica de javascript utilizando matrices  (un ambito local, donde esta ese elemento y donde lo puedo buscar se usa "lef" ambito local)
 */

//Variabes globales

var matriz = [ //los corchetes indican que es una  lista, se pueden mezclar enteros, caracteres etc...
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
]; //siempre se pone ; al final


/**
 * +++++++++++++++++++++++++++++++++++++++++
 * object.addEventListener("change", myScript);
 * eventos: onchange: cambie el valor, hay dos eventos escuchador de eventos, y el escribir lo que se va hacer
 */
window.onload = function () {
    document.getElementById('opciones').addEventListener("change", ejecutarOpcion);
};

function ejecutarOpcion() {
    let Opcion = document.getElementById('opciones').value;
    // alert("hola.." + Opcion); //ventana emrgente
    borrarMatriz();
    switch (Opcion) {
        case '1':
            mostrarMatriz();

            break;

        case '2':
            mostrarDiagonalPrincipal(0);//este es el metodo
            break;

        case '3':
            mostrarDiagonalInversa();
            break;

        case '4':
            mostrarSuperiorDerecha();
            break;

        case '5':
            mostrarSuperiorIzquierdo();
            break;

        case '6':
            mostrarInferiorIzquierda();
            break;

        case '7':
            mostrarInferiorDerecha();
            break;

        case '8':
            generarMatriz();
            mostrarMatriz();
            //console.log(matriz);
            break;
    }

}
//+++++++++++++++++++++++++++++++++++++++++++++



function generarMatriz() {//comienza con una minuscula y la primera plabr un verbo luego donde se va trabajar ese verbo
    for (let f = 0; f < matriz.length; f++) {//la f solo se manipula dentro del for, objeto es matriz, length es el atributo

        for (let c = 0; c < matriz.length; c++) {//c es la columna
            matriz[f][c] = generarAleatorio(10, 100); //aleatorio es una funcion inventada, que lo haga entre esos 
        }

    }

};

/**
 * muestra los numeros de la matriz en la caja
 */

function mostrarMatriz() {
    for (let f = 0; f < matriz.length; f++) {
        for (let c = 0; c < matriz.length; c++) {
            let ident = 'i-f' + f + 'c' + c;
            document.getElementById(ident).innerText = matriz[f][c];
        }
    }
}
function borrarMatriz() {
    for (let f = 0; f < matriz.length; f++) {
        for (let c = 0; c < matriz.length; c++) {
            let ident = 'd-f' + f + 'c' + c;
            document.getElementById(ident).innerText = "";
        }
    }
}

function mostrarDiagonalPrincipal() {
    for (let f = 0; f < matriz.length; f++) {
        //ensamblar Id 
        let ident = 'd-f' + f + 'c' + f;//se usa el cuadro de la parte derecha
        //mostrar en la caja correspondiente
        document.getElementById(ident).innerText = matriz[f][f];

    }
}

function mostrarDiagonalInversa() {
    for (let f = 0; f < matriz.length; f++) {
        let c = matriz.length - 1 - f;
        //ensamblar Id 
        let ident = 'd-f' + f + 'c' + c;
        //mostrar en la caja correspondiente
        document.getElementById(ident).innerText = matriz[f][4 - f];

    }
}

function mostrarSuperiorDerecha() {
    for (let f = 0; f < matriz.length; f++) {
        for (let c = f; c < matriz.length; c++) {

            let ident = 'd-f' + f + 'c' + c;

            document.getElementById(ident).innerText = matriz[f][c];

        }

    }
}

function mostrarSuperiorIzquierdo() {
    for (let f = 0; f < matriz.length; f++) {
        for (let c = 0; c <matriz.length-f; c++) {

            let ident = 'd-f' + f + 'c' + c;

            document.getElementById(ident).innerText = matriz[f][c];

        }
    }
}



function mostrarInferiorIzquierda() {
    for (let f = 0; f < matriz.length; f++) {
        for (let c = 0; c <= f; c++) {

            let ident = 'd-f' + f + 'c' + c;

            document.getElementById(ident).innerText = matriz[f][c];

        }
    }
}


function mostrarInferiorDerecha() {
    for (let f = 0; f < matriz.length; f++) {
        for (let c = 4-f; c < matriz.length; c++) {

            let ident = 'd-f' + f + 'c' + c;

            document.getElementById(ident).innerText = matriz[f][c];

        }
    }
}

/**
 * generar un numero entero aleatorio
 * generar min y max
 * @param {*} min valor minimo a generar
 * @param {*} max valor maximo a generar
 */

function generarAleatorio(min, max) {
    let numero = Math.round(Math.random() * (max - min)) + min;//round es un metodo se identifica por que tiene un parentesis seguido, random es un numero luego se suma con el min y da el ancho 
    return numero;
}

//generarMatriz();
//console.log(matriz); //se puede escribir en la consola lo que querramos
