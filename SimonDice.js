const BTN_EMPEZAR = document.getElementById('btnEmpezar')  //Se usa el getElementById para obtener el boton o lo que se requiera.

//Se obtienen los botones que tiene el juego.
const CELESTE = document.getElementById('celeste')
const VIOLETA = document.getElementById('violeta')
const NARANJA = document.getElementById('naranja')
const VERDE = document.getElementById('verde')


class Juego {
    constructor(){
        this.inicializar()
        this.generarSecuencia()
       // alert('Se ha iniciado el juego')      
    }

    inicializar(){
        BTN_EMPEZAR.classList.add('hide') //Lo que hacemos es agregar la clase hide al boton, ocultandonos el boton de la patalla
        this.nivel = 1
        this.colores = {
            CELESTE,
            VIOLETA,
            NARANJA,
            VERDE
        }

    }

    generarSecuencia(){
        this.secuencia = new Array(10).fill(0).map(numero =>  Math.floor(Math.random() * 4)) //Se usa para generar un arreglo de tamano 10 
        //fill(0)  llena todo el arreglo con 0s
        //map(...) solo funciona con arrays inicializados (con elementos definidos) 
        //Math.floor() redondea hacia abajo
    }

} 


function empezarJuego(){
    window.juego = new Juego() //Se usa para ver variables que estan declaradas dentro de funciones. (Para depuracion)
}