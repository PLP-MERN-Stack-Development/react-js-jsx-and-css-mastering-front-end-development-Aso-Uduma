# My App - React + Vite

A modern React application built with Vite, featuring a task management system with local storage persistence, theme context support, and responsive styling with Tailwind CSS.

## Features

- ✅ **Task Management**: Add, edit, delete, and filter tasks (All, Active, Completed)
- 💾 **Local Storage Persistence**: Tasks are automatically saved to browser storage
- 🎨 **Theme Context**: Support for theme switching
- 🎯 **Responsive Design**: Built with Tailwind CSS for mobile and desktop
- ⚡ **Fast Development**: Powered by Vite with HMR (Hot Module Replacement)
- 🔍 **ESLint Configuration**: Code quality and consistency checks included

## Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Babel/React Compiler** - JavaScript transformation and compilation

## Project Structure

```
src/
├── components/        # Reusable UI components (Button, Card, Header, etc.)
├── contexts/         # React Context providers (themeContext)
├── hooks/            # Custom React hooks (useLocalStorage)
├── pages/            # Page components (home, tasks)
├── api/              # API utilities (Posts.js)
├── utils/            # Helper functions
├── App.jsx           # Main application component
├── main.jsx          # Application entry point
├── index.css         # Global styles
└── App.css           # App-specific styles
```

## Getting Started

### Installation

```bash
npm install
```

### Development Server

Start the development server with hot module replacement:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

Check code quality:

```bash
npm run lint
```

## Usage

### Task Management
- **Add Task**: Type in the input field and press Enter or click "Add"
- **Edit Task**: Click "Edit" or double-click the task title
- **Complete Task**: Check the checkbox to mark as complete
- **Delete Task**: Click "Delete" to remove a task
- **Filter Tasks**: Use All, Active, or Completed filters
- **Clear Tasks**: Use "Clear all" or "Clear completed" buttons

### Local Storage
Tasks are automatically persisted to `localStorage` under the key `tasks_v1`. This allows your tasks to survive page refreshes.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build locally

## Browser Compatibility

Works on all modern browsers that support:
- ES6+ JavaScript
- Local Storage API
- CSS Grid and Flexbox

## Notes

- The React Compiler is enabled for optimized performance
- Tailwind CSS is configured with Vite integration for development
- Custom hooks like `useLocalStorage` are available for state management