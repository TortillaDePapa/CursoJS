let Nombre = 'Benja';


console.log(Nombre);

let iteracion = 10;
let numero = 5;


function sumaIterada(numero , iteracion){
        for(let i=0; i<iteracion;i++){
            numero += numero
        }

        console.log(numero);
}

sumaIterada(numero,iteracion)