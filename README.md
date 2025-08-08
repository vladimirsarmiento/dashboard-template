# Dashboard Template - English

## Description

This project is a modern template for administrative dashboards built with React, TypeScript, and Vite. It provides an elegant and responsive user interface with a customizable sidebar, route navigation, and reusable components.

## Features

- 🚀 Developed with React 19 and TypeScript
- 📱 Responsive design with mobile device support
- 🎨 Styled with Tailwind CSS
- 🧩 UI components based on shadcn/ui
- 🔍 Collapsible sidebar with category navigation
- 🧭 Routing system with React Router
- 🍞 Dynamic breadcrumbs
- 🔄 Hot Module Replacement (HMR)
- ⚡ Optimized performance with Vite

## Project Structure

```
├── public/              # Static files
├── src/                 # Source code
│   ├── assets/          # Images and resources
│   ├── components/      # Reusable components
│   │   ├── ui/          # User interface components
│   ├── data/            # Data and configurations
│   ├── hooks/           # Custom hooks
│   ├── lib/             # Utilities and helper functions
│   ├── pages/           # Application pages
│   ├── App.tsx          # Main component
│   └── main.tsx         # Entry point
├── components.json      # Components configuration
├── vite.config.ts       # Vite configuration
└── tsconfig.json        # TypeScript configuration
```

## Navigation

The dashboard includes the following sections:

### General
- Dashboard
- Payment
- Customers
- Message

### Tools
- Product
- Invoice
- Analytics
- Automation

### Support
- Settings (disabled)
- Security (disabled)
- Help (disabled)

## Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd dashboard-template

# Install dependencies
npm install

# Start development server
npm run dev
```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Compiles the project for production
- `npm run lint` - Runs the linter to check the code
- `npm run preview` - Previews the production version locally

## Technologies Used

- [React](https://react.dev/) - Library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Vite](https://vitejs.dev/) - Frontend build tool
- [React Router](https://reactrouter.com/) - Routing for React
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide React](https://lucide.dev/) - Icon library
- [Radix UI](https://www.radix-ui.com/) - Primitive and accessible UI components

## Customization

You can customize the sidebar by modifying the files in `src/data/sidebarData.ts`. Each menu item has the following structure:

```typescript
{
  title: "Dashboard",
  icon: LayoutPanelLeft,
  url: "/",
  disabled: false,
}
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---
---
---
---
---
---


# Plantilla de Dashboard - Español

## Descripción

Este proyecto es una plantilla moderna para dashboards administrativos construida con React, TypeScript y Vite. Proporciona una interfaz de usuario elegante y responsive con una barra lateral personalizable, navegación por rutas y componentes reutilizables.

## Características

- 🚀 Desarrollado con React 19 y TypeScript
- 📱 Diseño responsive con soporte para dispositivos móviles
- 🎨 Estilizado con Tailwind CSS
- 🧩 Componentes UI basados en shadcn/ui
- 🔍 Barra lateral colapsable con navegación por categorías
- 🧭 Sistema de rutas con React Router
- 🍞 Breadcrumbs dinámicos
- 🔄 Hot Module Replacement (HMR)
- ⚡ Rendimiento optimizado con Vite

## Estructura del Proyecto

```
├── public/              # Archivos estáticos
├── src/                 # Código fuente
│   ├── assets/          # Imágenes y recursos
│   ├── components/      # Componentes reutilizables
│   │   ├── ui/          # Componentes de interfaz de usuario
│   ├── data/            # Datos y configuraciones
│   ├── hooks/           # Custom hooks
│   ├── lib/             # Utilidades y funciones auxiliares
│   ├── pages/           # Páginas de la aplicación
│   ├── App.tsx          # Componente principal
│   └── main.tsx         # Punto de entrada
├── components.json      # Configuración de componentes
├── vite.config.ts       # Configuración de Vite
└── tsconfig.json        # Configuración de TypeScript
```

## Navegación

El dashboard incluye las siguientes secciones:

### General
- Dashboard
- Payment
- Customers
- Message

### Tools
- Product
- Invoice
- Analytics
- Automation

### Support
- Settings (deshabilitado)
- Security (deshabilitado)
- Help (deshabilitado)

## Instalación

```bash
# Clonar el repositorio
git clone <url-del-repositorio>

# Navegar al directorio del proyecto
cd dashboard-template

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Compila el proyecto para producción
- `npm run lint` - Ejecuta el linter para verificar el código
- `npm run preview` - Previsualiza la versión de producción localmente

## Tecnologías Utilizadas

- [React](https://react.dev/) - Biblioteca para construir interfaces de usuario
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado de JavaScript
- [Vite](https://vitejs.dev/) - Herramienta de construcción frontend
- [React Router](https://reactrouter.com/) - Enrutamiento para React
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitario
- [Lucide React](https://lucide.dev/) - Biblioteca de iconos
- [Radix UI](https://www.radix-ui.com/) - Componentes UI primitivos y accesibles

## Personalización

Puedes personalizar la barra lateral modificando los archivos en `src/data/sidebarData.ts`. Cada elemento del menú tiene la siguiente estructura:

```typescript
{
  title: "Dashboard",
  icon: LayoutPanelLeft,
  url: "/",
  disabled: false,
}
```

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo LICENSE para más detalles.
