
document.addEventListener('DOMContentLoaded', function(){
    
    const btn = document.getElementById('btnEnviar');
    const resultadoDiv = document.getElementById('resultado');

    btn.addEventListener('click', function(){
        let n1 = document.getElementById('n1').value;
        let n2 = document.getElementById('n2').value;

        console.log("Valores ingresados:",n1,n2);



        let resultado = n1+n2;
        console.log(resultado)
        resultadoDiv.textContent  = `Resultado de la suma ${resultado}`;
        resultadoDiv.style.color = 'black';
    });
    
});