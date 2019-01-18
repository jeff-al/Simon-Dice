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
        this.siguienteNivel()
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

    siguienteNivel(){
        this.ilimunarSecuencia()
    }

    transformarNumeroAColor(numero){ //Pasa un numero a un color (0-3)
        switch(numero){//Si se usa return no es necesario porner los breaks
            case 0:
                return 'CELESTE'
            case 1:
                return 'VIOLETA'
            case 2:
                return 'NARANJA'
            case 3:     
                return 'VERDE'
        }
    }

    ilimunarSecuencia(){
        for(let i = 0; i < this.nivel; i++){//Se usa let porque con var solo sale un color(ya que el programa avanza mas rapido que la funcion asincrona)
            const color = this.transformarNumeroAColor(this.secuencia[i]) //Se transforma los numeros de la secuencia a colores
            setTimeout(() => this.iluminarColor(color), 1000 * i)       
        }
    }

    iluminarColor(color){
        this.colores[color].classList.add('light')
        setTimeout(() => this.apagarColor(color), 350)
    }

    apagarColor(color){
        this.colores[color].classList.remove('light')

    }

} 


function empezarJuego(){
    window.juego = new Juego() //Se usa para ver variables que estan declaradas dentro de funciones. (Para depuracion)
}