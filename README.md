# i18n Ionic App

Este es el proyecto correspondiente a la Práctica de Laboratorio de Implementación de múltiples idiomas (i18n) en arquitecturas modernas usando Ionic v8, Angular Standalone Components y `@ngx-translate`.

## Requisitos

- Node.js (versión LTS recomendada)
- Ionic CLI (`npm install -g @ionic/cli`)

## Instalación y Ejecución

1. Clona el repositorio o navega a la carpeta del proyecto.
2. Abre una terminal y colócate en la raíz del proyecto (`cd i18n-app` o la ruta correspondiente).
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Levanta el servidor de desarrollo local:
   ```bash
   ionic serve
   ```
5. Abre el navegador en `http://localhost:8100` (esto se hace automáticamente).

## Tecnologías Utilizadas

- **Ionic v8**
- **Angular 18+ (Standalone Components)**
- **@ngx-translate/core**: Manejo dinámico de idiomas.
- **@ngx-translate/http-loader**: Carga de diccionarios JSON vía HTTP.

## Características

- Sin uso de módulos clásicos de Ionic o Angular (100% Standalone).
- Nueva sintaxis de control de flujo de Angular (`@for` y `@if`).
- Textos completamente internacionalizados, cargados desde `src/assets/i18n/`.
