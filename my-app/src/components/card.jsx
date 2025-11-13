import React from 'react';

const cardStyles = {
  card: {
    background: "var(--card-bg)",
    border: "1px solid var(--card-border)",
    borderRadius: "0.5rem",
    overflow: "hidden",
    cursor: "pointer",
    transition: "box-shadow 0.2s",
  },
  image: {
    width: "100%",
    height: "12rem",
    objectFit: "cover",
  },
  content: {
    padding: "1.5rem",
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: "600",
    margin: "0 0 0.5rem 0",
    color: "var(--text)",
  },
  description: {
    fontSize: "0.875rem",
    color: "var(--muted)",
    margin: 0,
    lineHeight: "1.5",
  },
};

const Card = ({ title, description, image, onClick }) => {
  return (
    <div style={cardStyles.card} onClick={onClick}>
      {image && <img src={image} alt={title} style={cardStyles.image} />}
      <div style={cardStyles.content}>
        <h2 style={cardStyles.title}>{title}</h2>
        <p style={cardStyles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Card;