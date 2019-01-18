const BTN_EMPEZAR = document.getElementById('btnEmpezar')  //Se usa el getElementById para obtener el boton o lo que se requiera.

//Se obtienen los botones que tiene el juego.
const CELESTE = document.getElementById('celeste')
const VIOLETA = document.getElementById('violeta')
const NARANJA = document.getElementById('naranja')
const VERDE = document.getElementById('verde')
const ULTIMO_NIVEL = 10


class Juego {
    constructor(){
        this.inicializar()
        this.generarSecuencia()
        setTimeout(this.siguienteNivel, 700)
       // alert('Se ha iniciado el juego')      
    }

    inicializar(){
        BTN_EMPEZAR.classList.add('hide') //Lo que hacemos es agregar la clase hide al boton, ocultandonos el boton de la patalla
        this.elegirColor = this.elegirColor.bind(this)  //Esto se hace para que el navegador no cambie el contexto del programa
        this.siguienteNivel = this.siguienteNivel.bind(this) //Es decir, no pasa el this del objeto al this de window
        this.nivel = 1
        this.colores = {
            CELESTE,
            VIOLETA,
            NARANJA,
            VERDE
        }

    }

    generarSecuencia(){
        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(numero =>  Math.floor(Math.random() * 4)) //Se usa para generar un arreglo de tamano 10 
        //fill(0)  llena todo el arreglo con 0s
        //map(...) solo funciona con arrays inicializados (con elementos definidos) 
        //Math.floor() redondea hacia abajo
    }

    agregarEventosClick(){
        //Se agregan los eventos de click para cada boton de color. (tipo ,  funcionALlamar)
        this.colores.CELESTE.addEventListener('click', this.elegirColor)
        this.colores.VIOLETA.addEventListener('click', this.elegirColor)
        this.colores.NARANJA.addEventListener('click', this.elegirColor)
        this.colores.VERDE.addEventListener('click', this.elegirColor)
    }

    quitarEventosClick(){
        this.colores.CELESTE.removeEventListener('click', this.elegirColor)
        this.colores.VIOLETA.removeEventListener('click', this.elegirColor)
        this.colores.NARANJA.removeEventListener('click', this.elegirColor)
        this.colores.VERDE.removeEventListener('click', this.elegirColor)
    }

    elegirColor(ev){
        const nombreColor = ev.target.dataset.color.toUpperCase() //Se obtiene el nombre del color del dataset
        const numeroColor = this.transformarColorANumero(nombreColor)
        this.iluminarColor(nombreColor)
        if(numeroColor === this.secuencia[this.subNivel]){ //Preguntamos si el color escogido conincide con el de la secuencia
            this.subNivel++;                            // Si lo es aumentamos el subnivel
            if(this.subNivel === this.nivel){           //Si el subnivel es igual al nivel actual
                this.nivel++                            //Aumentamos el nivel
                if(this.nivel === ULTIMO_NIVEL){        //Si es el ultimo nivel, gana
                    //Gano
                }
                else{                                   //Si no es el ultimo nivel, se empieza la secuencia con 1 nivel mas 
                    this.quitarEventosClick()           //Se quitan estos eventos para que no haya problemas.
                    setTimeout(this.siguienteNivel, 2000)
                }
                this.iluminarColor(nombreColor)
            }
        }else{
            //Perdio
        }
    }

    siguienteNivel(){
        this.subNivel = 0
        this.ilimunarSecuencia()
        this.agregarEventosClick() //Se hace aqui para poder quitarlos depues de que el usuario pase de nivel.
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

    transformarColorANumero(color){ //Pasa un numero a un color (0-3)
        switch(color){//Si se usa return no es necesario porner los breaks
            case 'CELESTE':
                return 0
            case 'VIOLETA':
                return 1
            case 'NARANJA':
                return 2
            case 'VERDE':     
                return 3
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