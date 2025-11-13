import React from 'react';

const buttonStyles = {
  primary: {
    background: "var(--nav-bg)",
    color: "var(--nav-text)",
    padding: "0.625rem 1rem",
    border: "none",
    borderRadius: "0.375rem",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "500",
  },
  secondary: {
    background: "transparent",
    color: "var(--text)",
    padding: "0.625rem 1rem",
    border: "1px solid var(--card-border)",
    borderRadius: "0.375rem",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "500",
  },
};

const Button = ({ text, onClick, variant = 'primary', disabled = false }) => {
  const style = {
    ...buttonStyles[variant],
    opacity: disabled ? 0.6 : 1,
    cursor: disabled ? "not-allowed" : "pointer",
  };

  return (
    <button
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;