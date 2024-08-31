function piedraPapelTijeras(usuarioOpcion) {
    const div = document.getElementById('main-container');
    
    div.innerHTML = '';

    const h3 = document.createElement('h3');
    h3.textContent = 'El monito está pensando';
    div.appendChild(h3);

    const img = document.createElement('img');
    img.classList.add('container-gif');
    img.src = 'assets/monito-piensa.gif';
    div.appendChild(img);

    setTimeout(() => {
        const monitoOpcion = Math.floor(Math.random() * 3);

        const h1 = document.createElement('h1'); 

        const span = document.createElement('span'); 
        span.classList.add('descripcion-principal'); 

        const a = document.createElement('a');
        a.setAttribute("href", "");

        const botonDevuelta = document.createElement('button');
        botonDevuelta.textContent = 'INTENTAR OTRA VEZ'; 
        botonDevuelta.classList.add('boton-devuelta');
        
        a.appendChild(botonDevuelta);
        

        div.innerHTML = '';
        div.style.height = '41rem'; 

        if (monitoOpcion == usuarioOpcion) {
    
            h1.textContent = '¡Ha habido empate!'; 
            div.appendChild(h1); 
        
            span.textContent = '¡Oh no! Tú y monito han elegido la misma opción. Es un empate, pero monito no está satisfecho';
            div.appendChild(span); 
        
            const gifEmpate = document.createElement('img');
            gifEmpate.src = 'assets/monito-empate.gif';
            gifEmpate.classList.add('container-gif');
            div.appendChild(gifEmpate); 
        
        } else if (usuarioOpcion == 0 && monitoOpcion == 2) {
        
            h1.textContent = '¡Has ganado!'; 
            div.appendChild(h1); 
        
            span.textContent = 'Monito eligió tijeras así que perdió. Pobre monito tonto. Si quieres darle revancha, dale al boton de abajo';
            div.appendChild(span); 
        
            const gifPierde = document.createElement('img');
            gifPierde.src = 'assets/monito-pierde.gif';
            gifPierde.classList.add('container-gif');
            div.appendChild(gifPierde); 
        
        }else if (usuarioOpcion == 1 && monitoOpcion == 0) {
            h1.textContent = '¡Has ganado!'; 
            div.appendChild(h1); 
        
            span.textContent = 'Monito eligió piedra así que perdió. Pobre monito tonto. Si quieres darle revancha, dale al boton de abajo';
            div.appendChild(span); 
        
            const gifPierde = document.createElement('img');
            gifPierde.src = 'assets/monito-pierde.gif';
            gifPierde.classList.add('container-gif');
            div.appendChild(gifPierde); 
        
        }else if (usuarioOpcion == 2 && monitoOpcion == 1) {
            h1.textContent = '¡Has ganado!'; 
            div.appendChild(h1); 
        
            span.textContent = 'Monito eligió papel así que perdió. Pobre monito tonto. Si quieres darle revancha, dale al boton de abajo';
            div.appendChild(span); 
        
            const gifPierde = document.createElement('img');
            gifPierde.src = 'assets/monito-pierde.gif';
            gifPierde.classList.add('container-gif');
            div.appendChild(gifPierde); 
        }else{
            h1.textContent = '¡Has perdido!'; 
            div.appendChild(h1); 
        
            span.textContent = '¡¡¡MONITO GANÓ!! Jajaja, eres tan tonto que te gana un monito. Si quieres revancha, dale al boton de abajo'; 
            div.appendChild(span); 
        
            const gifGana = document.createElement('img');
            gifGana.src = 'assets/monito-gana.gif';
            gifGana.classList.add('container-gif');
            div.appendChild(gifGana); 
        }
        
        div.appendChild(a); 

    }, 3000);
}

    
