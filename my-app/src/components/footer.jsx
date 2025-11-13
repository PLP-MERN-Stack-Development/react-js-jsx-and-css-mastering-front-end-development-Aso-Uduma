import React from 'react';

const footerStyles = {
  footer: {
    background: "var(--footer-bg)",
    color: "var(--footer-text)",
    padding: "2rem 1.5rem",
    marginTop: "2rem",
    borderTop: "1px solid rgba(55,65,81,0.35)",
  },
  content: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "2rem",
  },
  text: {
    margin: 0,
    fontSize: "0.875rem",
  },
  links: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    gap: "1.5rem",
  },
  link: {
    color: "var(--muted)",
    textDecoration: "none",
    fontSize: "0.875rem",
  },
};

const Footer = () => {
  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.content}>
        <p style={footerStyles.text}>&copy; {new Date().getFullYear()} My App. All rights reserved.</p>
        <ul style={footerStyles.links}>
          <li><a href="/about" style={footerStyles.link}>About</a></li>
          <li><a href="/contact" style={footerStyles.link}>Contact</a></li>
          <li><a href="/privacy" style={footerStyles.link}>Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;


