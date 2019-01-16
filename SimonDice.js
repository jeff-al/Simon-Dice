const BTN_EMPEZAR = document.getElementById('btnEmpezar')  //Se usa el getElementById para obtener el boton o lo que se requiera.

//Se obtienen los botones que tiene el juego.
const CELESTE = document.getElementById('celeste')
const VIOLETA = document.getElementById('violeta')
const NARANJA = document.getElementById('naranja')
const VERDE = document.getElementById('verde')



class Juego {
    constructor(){
        this.inicializar()
        alert('Se ha iniciado el juego')      
    }

    inicializar(){
        BTN_EMPEZAR.classList.add('hide') //Lo que hacemos es agregar la clase hide al boton, ocultandonos el boton de la patalla
    }

} 


function empezarJuego(){
    var juego = new Juego()
}