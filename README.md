
# Un Consejito

👋 **Un Consejito** 👋 es una aplicación web interactiva que proporciona consejos, frases y citas inspiradoras basadas en una palabra clave ingresada por el usuario 🖤. La aplicación también cuenta con un "modo Dan" 🙈 que transforma los consejos a una perspectiva más pesimista-existencialista 😱💀.

## Características

- **Búsqueda de Consejos**: Ingresando una palabra clave, el usuario recibe un consejo relacionado.
- **Modo Dan**: Al activar este modo, los consejos se transforman a una perspectiva más pesimista.
- **Interfaz Interactiva**: La imagen principal cambia al hacer clic, y los resultados se muestran en un modal flotante, que se puede cerrar al hacer click fuera o clickeando sobre la cruz.
- **Diseño Responsivo**: La aplicación es accesible y visualmente agradable en dispositivos de diferentes tamaños.

## Tecnologías Utilizadas

- **HTML5**: Estructura de la aplicación.
- **CSS3**: Estilos y diseño responsivo.
- **JavaScript**: Lógica y funcionalidad de la aplicación.
- **JSON**: Base de datos de consejos.

## Instalación

1. Clona este repositorio en tu máquina local:
    ```bash
    git clone https://github.com/tu-usuario/un-consejito.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd un-consejito
    ```
3. Abre `index.html` en tu navegador preferido.

## Uso

1. **Ingresar Palabra Clave**: Escribe una palabra clave en el campo de entrada y haz clic en "Buscar Consejo".
2. **Ver Consejo**: El consejo relacionado aparecerá en un modal flotante.
3. **Frase Aleatoria**: La frase resultante es diferente por cada vez que haces la búsqueda.
4. **Modo Dan**: Haz clic en el botón de corazón para romper el corazón de DAN y recibir consejos pesimistas.

## Archivos Principales

- `index.html`: Estructura de la aplicación.
- `styles.css`: Estilos y diseño.
- `script.js`: Lógica y funcionalidad.
- `consejos.json`: Base de datos de consejos.

## Implementación del Modo Dan

El "Modo Dan" es una característica que transforma los consejos mostrados a una perspectiva más pesimista-existencialista. Esto se logra mediante un archivo JSON adicional que contiene los mismos términos clave, pero con consejos más oscuros.

### Ejemplo de consejos.json en Modo Dan

[
    {
        "palabra": "motivacion",
        "consejos": [
            "La motivación es solo una ilusión momentánea, como la cafeína flotando en tu taza.",
            "Incluso los más motivados se enfrentan a la futilidad.",
            "La motivación no podrá llenar el vacío, como cuando tu ex te dejó."
        ]
    }
]

## Autores


### No tiene ninguna licencia. Lo hice porque porque quería divertirme aprendiendo.






