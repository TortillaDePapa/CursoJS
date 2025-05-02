document.addEventListener('DOMContentLoaded', function(){

    const btn = document.getElementById('btn');
    const div = document.getElementById('div');



    btn.addEventListener('click', function(){
            let nombre = document.getElementById('nombre').value;
            let apellido = document.getElementById('apellido').value;


            let nombreCompleto = nombre + apellido;


            div.textContent = `Nombre completo ingresado: ${nombreCompleto}`;
            div.style.color = 'black'
    });


});