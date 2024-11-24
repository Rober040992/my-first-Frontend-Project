# Descripción detallada del diagrama de flujo y las interacciones entre los archivos del proyecto

El propósito de este diagrama es detallar cómo los diferentes archivos de tu proyecto están conectados y cómo interactúan entre sí para implementar la funcionalidad general del frontend, desde la gestión de anuncios hasta la notificación de eventos al usuario.

## 1. `index-coordinator.js` (Orquestador central)
- Este archivo inicializa el DOM al cargar la página y orquesta las interacciones entre los controladores de anuncios y notificaciones.
- **Conexiones:**
  - **Con `adds-controller.js`:** Llama a `addsController(addsContainer)` para gestionar los anuncios.
  - **Con `notification-controller.js`:** Llama a `notificationController(notificationContainer)` para gestionar las notificaciones.
  - Escucha el evento `load-info` en el contenedor de anuncios (`addsContainer`) y utiliza el método `showNotification` de `notificationController` para mostrar un mensaje de notificación al usuario.

## 2. `adds-controller.js` (Controlador de anuncios)
- Este archivo es responsable de coordinar las operaciones relacionadas con los anuncios:
  - Llama a `getAdds()` desde `adds-model.js` para obtener los datos de los anuncios desde la API.
  - Llama a `drawAdds()` desde `adds-drawAdd.js` para renderizar los anuncios en el contenedor.
  - Si hay un error durante la obtención de los datos, lanza un evento personalizado (`load-info`) usando `dispatchEventMessageType()` desde `eventDispatcherType.js` para notificar el problema.
- **Conexiones:**
  - **Con `adds-model.js`:** Llama a `getAdds()` para obtener los datos de los anuncios.
  - **Con `adds-drawAdd.js`:** Pasa los datos de los anuncios a `drawAdds()` para renderizarlos.
  - **Con `eventDispatcherType.js`:** Llama a `dispatchEventMessageType()` para enviar eventos personalizados, que serán capturados por el coordinador (`index-coordinator.js`) para mostrar notificaciones.

## 3. `adds-model.js` (Modelo de datos de anuncios)
- Este archivo contiene la lógica para obtener los datos de los anuncios desde una API REST.
- **Conexiones:**
  - **Con `adds-controller.js`:** Es llamado por `addsController` para devolver los datos de los anuncios como una respuesta JSON. Maneja errores en caso de que la API no esté disponible.

## 4. `adds-drawAdd.js` (Renderización de anuncios)
- Este archivo maneja la lógica para dibujar los anuncios dentro del contenedor:
  - Si no hay anuncios disponibles, utiliza la función `emptyAddsList()` de `adds-views.js` para mostrar un mensaje de que no hay anuncios.
  - Si hay anuncios, llama a la función `buildAdd()` de `adds-views.js` para construir cada anuncio y agregarlo al contenedor.
- **Conexiones:**
  - **Con `adds-views.js`:** Utiliza `buildAdd()` para construir cada anuncio y `emptyAddsList()` para mostrar un mensaje cuando no hay anuncios.

## 5. `adds-views.js` (Vistas de anuncios)
- Este archivo contiene funciones para crear elementos HTML relacionados con los anuncios:
  - `buildAdd(add)`: Construye un anuncio a partir de los datos proporcionados.
  - `emptyAddsList()`: Devuelve un mensaje HTML indicando que no hay anuncios disponibles.
- **Conexiones:**
  - **Con `adds-drawAdd.js`:** Proporciona las funciones necesarias para construir los elementos visuales de los anuncios.

## 6. `notification-controller.js` (Controlador de notificaciones)
- Este archivo gestiona la visualización de notificaciones en el contenedor de notificaciones:
  - Usa `buildNotification()` de `notification-views.js` para crear el HTML de la notificación.
  - Limpia automáticamente las notificaciones después de 5 segundos.
- **Conexiones:**
  - **Con `notification-views.js`:** Llama a `buildNotification()` para generar el HTML de las notificaciones.
  - **Con `index-coordinator.js`:** Proporciona el método `showNotification()`, que es llamado cuando se detecta el evento `load-info`.

## 7. `notification-views.js` (Vistas de notificaciones)
- Contiene la lógica para construir el HTML de las notificaciones.
- **Conexiones:**
  - **Con `notification-controller.js`:** Proporciona la función `buildNotification(message, type)` para crear las notificaciones visuales.

## 8. `eventDispatcherType.js` (Despachador de eventos personalizados)
- Este archivo crea eventos personalizados que transportan información como el mensaje de error o éxito y el tipo de notificación.
- **Conexiones:**
  - **Con `adds-controller.js`:** Utilizado para despachar el evento `load-info`, el cual es capturado por el coordinador para mostrar notificaciones.

---

## Flujo de ejecución principal

### Inicio:
- `index-coordinator.js` inicializa el DOM y llama a los controladores de anuncios (`addsController`) y notificaciones (`notificationController`).

### Gestión de anuncios:
1. `adds-controller.js` obtiene los datos de la API mediante `adds-model.js`.
2. Los datos son enviados a `adds-drawAdd.js` para ser renderizados.
3. Si ocurre un error, `adds-controller.js` lanza un evento `load-info` usando `eventDispatcherType.js`.

### Gestión de notificaciones:
1. El evento `load-info` es capturado por el `index-coordinator.js`.
2. `index-coordinator.js` utiliza el método `showNotification` de `notification-controller.js` para mostrar el mensaje de notificación, construido por `notification-views.js`.

---

Este flujo asegura que los datos y las notificaciones se gestionen de manera modular y organizada, permitiendo que los errores o eventos se comuniquen eficientemente entre los módulos.
