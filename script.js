document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('video-background');
    const button = document.getElementById('activate-camera');

    button.addEventListener('click', function() {
        // Mostrar el video y activar la cámara
        video.style.display = 'block'; // Mostrar el video

        // Acceder a la cámara del usuario
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                // Asignar el flujo de video al elemento video
                video.srcObject = stream;
            })
            .catch(error => {
                console.error('Error al acceder a la cámara:', error);
                video.style.display = 'none'; // Ocultar el video si hay un error
            });
    });
});



// Función para calcular el número de meses desde una fecha específica hasta la fecha actual
function calcularMeses(fechaInicio) {
    const fechaActual = new Date();
    const diferenciaAnios = fechaActual.getFullYear() - fechaInicio.getFullYear();
    const diferenciaMeses = fechaActual.getMonth() - fechaInicio.getMonth();
    return diferenciaAnios * 12 + diferenciaMeses;
}

// Fecha de inicio
const fechaInicio = new Date('2024-06-22');

// Calcula el número de meses desde la fecha de inicio
const meses = calcularMeses(fechaInicio);

// Actualiza el contenido del <h1> con el número de meses
document.getElementById('message').textContent = `Feliz ${meses-1} meses`;
