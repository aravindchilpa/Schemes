// Card.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"

function Card({ data }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (data) {
      navigate("/full-details", { state: { data } });
    } else {
      console.error("Data is undefined or null.");
    }
  };
  

  return (
    <div className="card-container">
    <div className="card" onClick={handleCardClick}>
      <h2>{data.title}</h2>
      <p>{data.description.slice(0, 100)} ....</p>
    </div>
    </div>
  );
}

export default Card;
