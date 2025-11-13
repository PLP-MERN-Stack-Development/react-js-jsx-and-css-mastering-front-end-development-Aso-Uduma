import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/themeContext.jsx";

const navStyles = {
  nav: {
    background: "var(--nav-bg)",
    color: "var(--nav-text)",
    padding: "1rem 1.5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
  },
  title: {
    margin: 0,
    fontSize: "1.25rem",
    fontWeight: "bold",
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  link: {
    color: "var(--nav-text)",
    textDecoration: "none",
    padding: "0.5rem 0.75rem",
    cursor: "pointer",
  },
  button: {
    background: "var(--header-text)",
    color: "var(--header-bg)",
    padding: "0.5rem 0.75rem",
    border: "none",
    borderRadius: "0.375rem",
    cursor: "pointer",
  },
};

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav style={navStyles.nav}>
      <h1 style={navStyles.title}>My React App</h1>
      <div style={navStyles.links}>
        <Link to="/" style={navStyles.link}>Home</Link>
        <Link to="/tasks" style={navStyles.link}>Tasks</Link>
        <button
          onClick={toggleTheme}
          style={navStyles.button}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </nav>
  );
}
