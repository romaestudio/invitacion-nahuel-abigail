/// <reference types="vite/client" />

// Declaración para permitir importar cualquier archivo .css, .scss, etc.
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// Opcional: si también usas CSS Modules (*.module.css)
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// Opcional: si usas .scss o .sass
declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}