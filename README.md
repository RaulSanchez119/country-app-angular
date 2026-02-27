# CountryApp 🌍
Aplicación web para explorar información de países del mundo, construida con Angular y TailwindCSS, consumiendo la API de REST Countries. Permite buscar países por capital, nombre o región y ver información detallada de cada uno.

## 🚀 Tecnologías
- Angular 21
- Tailwind CSS
- DaisyUI
- REST Countries API

## ⚙️ Instalación
1. Clonar el repositorio
```bash
   git clone https://github.com/RaulSanchez119/country-app-angular
```
2. Instalar dependencias
```bash
   npm install
```
3. Iniciar el servidor
```bash
   ng serve
```
4. Abrir `http://localhost:4200/`


## ✨ Funcionalidades
- 🏛️ Búsqueda de países por capital
- 🌐 Búsqueda de países por nombre
- 🗺️ Filtrado de países por región
- 📄 Vista detallada de cada país con bandera, población, región y subregión
- 💾 Caché de búsquedas para evitar peticiones repetidas
- 🔗 Persistencia de búsqueda en la URL mediante query params

## 📚 Conceptos aplicados
- `rxResource` y `resource` para manejo de estado asíncrono
- `linkedSignal` y `signal` para reactividad
- `debounceTime` con `effect` y `onCleanup` para búsquedas automáticas
- Caché de resultados con `Map`
- Persistencia de estado en URL con `ActivatedRoute` y `queryParams`
- Manejo de excepciones con `catchError` y `throwError` en RxJS
- Mapeo de datos con interfaces y mappers
- `DecimalPipe` para formateo de números
- Página 404 con navegación hacia atrás usando `Location`

## 📁 Estructura del proyecto
src/
├── app/
│   ├── country/
│   │   ├── components/      # country-list, search-input
│   │   ├── interfaces/
│   │   ├── layouts/
│   │   ├── mappers/
│   │   ├── pages/           # by-capital, by-country, by-region, country-by
│   │   ├── services/
│   │   └── country.routes.ts
│   └── shared/
│       ├── components/      # navbar, footer
│       └── pages/           # home
├── public/
└── styles.css

## 👤 Autor
Raul Sanchez — [LinkedIn](https://www.linkedin.com/in/raul-sanchez119/)
