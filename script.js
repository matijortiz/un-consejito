function validateInput(input) {
    // Elimina caracteres no permitidos
    input.value = input.value.replace(/[^a-zA-Z]/g, '');
}

function getAdvice() {
    const keywordInput = document.getElementById('keywordInput');
    const keyword = keywordInput.value.trim().toLowerCase();

    if (keyword === '') {
        document.getElementById('adviceOutput').innerText = 'Por favor, ingresa una palabra.';
        return;
    }

    fetch('consejos.json')
        .then(response => response.json())
        .then(data => {
            const adviceEntry = data.find(entry => entry.palabra.toLowerCase() === keyword);
            if (adviceEntry) {
                const randomAdvice = adviceEntry.consejos[Math.floor(Math.random() * adviceEntry.consejos.length)];
                document.getElementById('adviceOutput').innerText = randomAdvice;
            } else {
                document.getElementById('adviceOutput').innerText = 'No se encontró ningún consejo para esa palabra.';
            }
        })
        .catch(error => {
            document.getElementById('adviceOutput').innerText = 'Hubo un error al buscar el consejo.';
            console.error('Error fetching advice:', error);
        });
}