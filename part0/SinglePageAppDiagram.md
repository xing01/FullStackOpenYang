# Diagrama de acceso a la Aplicación de una Sola Página

```mermaid
sequenceDiagram
    participant user as Usuario
    participant browser as Navegador
    participant server as Servidor

    user->>browser: Accede a https://studies.cs.helsinki.fi/exampleapp/spa
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa (HTML)
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa/main.css (CSS)
    activate server
    server-->>browser: Hoja de estilo CSS
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa/spa.js (JavaScript)
    activate server
    server-->>browser: Archivo JavaScript del SPA
    deactivate server

    Note right of browser: El navegador ejecuta spa.js

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa/data.json (Notas en formato JSON)
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server

    Note right of browser: El navegador muestra las notas en la página

```