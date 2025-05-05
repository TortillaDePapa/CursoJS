document.addEventListener('DOMContentLoaded', function(){

    const btn = document.getElementById('btn');
    const div = document.getElementById('div');
    const btnMas = document.getElementById('btnMas');
    const btnMenos = document.getElementById('btnMenos');
    const divValor =  document.getElementById('valor1');
    divValor.style.color = 'black'
/*
Para obtener un valor de un imput se utiliza el .value 
en caso de que el valor que quiero obtener este dentro de un div o de otra tipo de etiqueta html tengo que usar el .textContent

*/ 

    btnMas.addEventListener('click' , function(){
            let valor  = Number( document.getElementById('valor1').textContent);
            
            valor += 1;

        divValor.textContent = valor;


        if(valor == 0){
            divValor.style.color = 'green'  
        }else if(valor > 0){
            divValor.style.color='black';
        }else{
            divValor.style.color = 'red'
        }
        
        console.log(valor)
    });



    btnMenos.addEventListener('click' ,function(){
        let valor  = Number(document.getElementById('valor1').textContent);  // utilizamos .textContent porque el dato esta dentro de una etiqueda div
        
        valor -= 1;

    divValor.textContent = valor;
  
    if(valor == 0){
        divValor.style.color = 'green'  
    }else if(valor > 0){
        divValor.style.color='black';
    }else{
        divValor.style.color = 'red'
    }
    console.log(valor)
        
    });

   

    btn.addEventListener('click', function(){
            let nombre = document.getElementById('nombre').value;
            let apellido = document.getElementById('apellido').value; // utilizamos .value porque queremos obtener un valor dentro de un input


            let nombreCompleto = nombre + apellido;
            let nombreCompletoS = nombre +' '+ apellido;


            div.textContent = `Nombre completo ingresado: ${nombreCompleto} \n Nombre completo ingresado con separacion: ${nombreCompletoS}`;
            div.style.color = 'black'
    });


});