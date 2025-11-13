import React from 'react';

export default function Home() {
  return (
    <div className="container home-container">
      <header className="home-header">
        <h1 className="home-title">Welcome to My App</h1>
        <p className="home-subtitle">A React + Vite Application</p>
      </header>

      <section className="home-section">
        <h2>About This App</h2>
        <p>
          This is a modern React application built with Vite, featuring a task management system
          with local storage persistence and theme context support.
        </p>
      </section>

      <section className="home-section">
        <h2>Features</h2>
        <ul style={{ marginLeft: '1.25rem' }}>
          <li>✅ Task Management - Add, edit, delete tasks</li>
          <li>💾 Local Storage - Tasks persist across sessions</li>
          <li>🎨 Theme Switching - Toggle between light and dark modes</li>
          <li>⚡ Hot Module Replacement - Real-time development experience</li>
        </ul>
      </section>

      <section className="home-section">
        <h2>Getting Started</h2>
        <p>
          Head over to the <strong>Tasks</strong> page to manage your tasks. You can create, edit,
          and organize your to-do items with ease.
        </p>
        <div className="home-card">
          <strong>💡 Tip:</strong> Double-click on a task to edit it quickly!
        </div>
      </section>

      <section className="home-section">
        <h2>Tech Stack</h2>
        <p>Built with React 19, Vite, React Router, Tailwind CSS, and modern JavaScript.</p>
      </section>
    </div>
  );
}