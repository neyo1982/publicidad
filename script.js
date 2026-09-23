document.addEventListener("DOMContentLoaded", function() {
    // 1. TU LISTA DE IMÁGENES REALES DE GITHUB
    const misImagenes = [
        "https://githubusercontent.com"
        // Aquí podrás ir agregando tus otras 29 imágenes más adelante separadas por comas...
    ];

    // Selecciona una imagen al azar
    const imagenAleatoria = misImagenes[Math.floor(Math.random() * misImagenes.length)];

    // Buscamos el contenedor nativo de Omada donde se pone el logo o banner corporativo
    const contenedorPortal = document.querySelector('.hotspot-logo, .portal-banner, #logo, .login-banner, img, .body-content'); 
    
    if (contenedorPortal) {
        // Creamos dinámicamente el anuncio
        const nuevoAnuncio = document.createElement('img');
        nuevoAnuncio.src = imagenAleatoria;
        nuevoAnuncio.style.width = "100%";
        nuevoAnuncio.style.maxWidth = "400px";
        nuevoAnuncio.style.maxHeight = "400px";
        nuevoAnuncio.style.display = "block";
        nuevoAnuncio.style.margin = "0 auto 15px auto";
        nuevoAnuncio.style.objectFit = "contain";
        nuevoAnuncio.style.borderRadius = "8px";
        
        // Lo metemos al principio del portal cautivo local
        contenedorPortal.insertBefore(nuevoAnuncio, contenedorPortal.firstChild);
    }

    // 2. CONTADOR DE 15 SEGUNDOS OBLIGATORIO
    const botonConectar = document.querySelector('input[type="submit"], button, .login-btn, #login-btn, .button');
    
    if (botonConectar) {
        let tiempoRestante = 15;
        const textoOriginal = botonConectar.value || botonConectar.innerText || "Conectarse";
        
        botonConectar.disabled = true;
        botonConectar.style.opacity = "0.5";
        botonConectar.style.cursor = "not-allowed";
        
        const contador = setInterval(function() {
            tiempoRestante--;
            if (botonConectar.tagName === "INPUT") {
                botonConectar.value = "Espera... (" + tiempoRestante + "s)";
            } else {
                botonConectar.innerText = "Espera... (" + tiempoRestante + "s)";
            }
            
            if (tiempoRestante <= 0) {
                clearInterval(contador);
                botonConectar.disabled = false;
                botonConectar.style.opacity = "1";
                botonConectar.style.cursor = "pointer";
                if (botonConectar.tagName === "INPUT") {
                    botonConectar.value = textoOriginal;
                } else {
                    botonConectar.innerText = textoOriginal;
                }
            }
        }, 1000);
    }
});
