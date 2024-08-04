
function validateInput(input) {
    input.value = input.value.replace(/[^a-zA-Z]/g, '');
}

function getAdvice() {
    const keywordInput = document.getElementById('keywordInput');
    const keyword = keywordInput.value.trim().toLowerCase();

    if (keyword === '') {
        showModal('Por favor, ingresa una palabra.');
        return;
    }

    fetch('consejos.json')
        .then(response => response.json())
        .then(data => {
            const adviceEntry = data.find(entry => entry.palabra.toLowerCase() === keyword);
            if (adviceEntry) {
                const randomAdvice = adviceEntry.consejos[Math.floor(Math.random() * adviceEntry.consejos.length)];
                showModal(randomAdvice);
            } else {
                showModal('No se encontró ningún consejo para esa palabra.');
            }
        })
        .catch(error => {
            showModal('Error al obtener el consejo.');
            console.error('Error fetching advice:', error);
        });
}

function showModal(message) {
    const modal = document.getElementById('adviceModal');
    const adviceOutput = document.getElementById('adviceOutput');
    adviceOutput.innerText = message;
    modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('adviceModal');
    modal.classList.add('hidden');
}

// Cerrar el modal cuando se toca fuera de él
window.onclick = function(event) {
    const modal = document.getElementById('adviceModal');
    if (event.target === modal) {
        modal.classList.add('hidden');
    }
}

// Modal oculto al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('adviceModal');
    modal.classList.add('hidden');
});
