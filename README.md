# Gestor de lista de mercado
Una app web que maneja una serie de listas por mes para realizar un seguimiento de gastos y del precio de productos, con herramientas para comprar precios y ver gastos mensuales.
## Ejecución
1. Se clona el repositorio con `git clone https://github.com/JCD-SENA/GestorListaMercado.git` o se descarga y descomprime el ZIP.
2. Se instalan las liberías necesarias con `npm i`
3. Se crea un archivo .env con las credenciales correspondientes de EmailJS y Firebase
```
# EmailJS
VITE_SERVICE_ID=
VITE_TEMPLATE_ID=
VITE_PUBLIC_KEY=
# Firebase
VITE_API_KEY=
VITE_AUTH_DOMAIN=
VITE_PROJECT_ID=
VITE_STORAGE_BUCKET=
VITE_MESSAGE_SENDER_ID=
VITE_APP_ID=
```
4. Se ejecuta el programa con `npm run dev`
## Elaboración del proyecto
### Sprint 1
* La aplicación se basa en un proyecto anterior por lo que la base y el diseño ya estaban hechas
* El 1 y 2 de Marzo se incluyeron los campos de fecha, tienda y categoría
* El 6 de Marzo Se realiza la implementación del sistema de sesiones para crear cuenta con email, Google y Github
* El 14 de Marzo se implementa la funcionalidad de crear cuenta con Facebook ya que fue olvidada, concluyendo el primer sprint
### Sprint 2
* El 18 de Marzo se implementó el resumen de gastos por mes
* El 19 de Marzo se implementa la comparación de precios por meses
* El 21 de Marzo se implementa la funcionalidad de desactivar productos, concluyendo con el segundo Sprint
### Sprint 3
* El 29 de Marzo se realiza el diseño responsivo
* El 30 de Marzo se implementa el menú de contacto funcional con EmailJS