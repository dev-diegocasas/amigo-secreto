// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigosSecretos = [];

agregarAmigoSecreto = () => {
    let nuevoAmigoSecreto = document.querySelector('#amigo').value;
    // Validando que se haya insertado un nombre
    if (nuevoAmigoSecreto != '') {
        amigosSecretos.push(nuevoAmigoSecreto);
        console.log({amigosSecretos}); 
        actualizarListaAmigos();
    }else{
        alert('Por favor, inserte un nombre.');
    }
    // Limpieza del campo de texto
    document.getElementById('amigo').value = '';
}

actualizarListaAmigos = () =>{
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 
    // Crea una lista por cada Nombre que esta en la lista de los amigos secretos.
    for (let indiceNombre = 0; indiceNombre < amigosSecretos.length; indiceNombre++) {
        //console.log(amigosSecretos.length);
        listaAmigos.innerHTML += `
            <li>${amigosSecretos[indiceNombre]}</li>
        `;
    }
}

sortearAmigoSecreto = () =>{
    if (Array.isArray(amigosSecretos) && amigosSecretos.length > 0) {
        let indiceAleatorio = Math.floor(Math.random()*((amigosSecretos.length-1)+1));
        console.log(indiceAleatorio);
        let amigoSorteado = document.getElementById('resultado');
        amigoSorteado.innerHTML = `<li> El amigo secreto sorteado es: ${amigosSecretos[indiceAleatorio]}. </li>`;
        listaAmigos.innerHTML = "";
    }else {
        alert('No hay amigos para sortear...');
    }
}

// Implementar la funcion de eliminar amigo sorteado..
// Seguir sortenado con los demas que hay...
// hasta que finalice y se hayan sorteado todos.


