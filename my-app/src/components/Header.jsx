import React, { useState } from "react";

const styles = {
  header: {
    background: "var(--header-bg)",
    color: "var(--header-text)",
    padding: "0.5rem 1rem",
    boxShadow: "0 2px 6px rgba(2,6,23,0.4)",
    position: "sticky",
    top: 0,
    zIndex: 40,
  },
  container: {
    maxWidth: 1100,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "1rem",
  },
  brand: { display: "flex", alignItems: "center", gap: "0.75rem" },
  logo: {
    fontSize: "1.125rem",
    fontWeight: 700,
    letterSpacing: "0.4px",
    color: "var(--header-text)",
    background: "transparent",
    border: "none",
    cursor: "default",
  },
};

function Header({ title = "My App" }) {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.brand}>
          <button style={styles.logo} aria-label={title}>
            {title}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
