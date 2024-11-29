# Proyect Frontend Web XVII
## Instrucciones

## Nota pal profe:
- no me dio tiempo a meter las opcionales de los requisitos ni ha rematar algunos detalles ,  pero creo que esta todo lo necesario.
- estados de interfaz implementados excepto ruleta de carga carga excepto index que contiene todo. 
### Clona el repositorio:
Abre una terminal y clona este repositorio en tu máquina local:
```bash
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>
Inicia un servidor local:
Utiliza npx live-server para iniciar un servidor local y cargar la aplicación:

bash
Copy code
npx live-server
Esto abrirá automáticamente la aplicación en tu navegador. Si no ocurre, puedes abrir manualmente la URL http://127.0.0.1:8080.

Explora la aplicación:
Navega a la página principal para visualizar los anuncios.
Haz clic en los anuncios para ver más detalles.
Siéntete libre de crear nuevos anuncios utilizando el formulario integrado.
Detalles Técnicos
El proyecto utiliza un patrón MVC (Model-View-Controller) para estructurar el código.
Se conecta a una API REST para obtener y gestionar datos.
Asegúrate de que el backend (API) esté corriendo en http://127.0.0.1:8000 para que la aplicación funcione correctamente.
Errores Comunes y Soluciones
Problema: La aplicación no carga datos.
Solución: Verifica que el servidor backend está corriendo en la URL http://127.0.0.1:8000.

Problema: npx live-server no está disponible.
Solución: Instala Node.js y asegúrate de que está correctamente configurado.

Problema: Los estilos o scripts no cargan.
Solución: Limpia la caché del navegador (Ctrl + F5) o verifica las rutas de los archivos en el proyecto.