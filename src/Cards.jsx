import React from 'react';

function Card({ bgColor, number, title, description }) {
  const cardStyle = {
    backgroundColor: bgColor,
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    marginBottom: '20px'
  };

  return (
    <div style={cardStyle} className="card">
      <h2>{number}</h2>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
