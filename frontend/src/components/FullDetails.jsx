// FullDetails.jsx

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css"
import { BiArrowBack} from "react-icons/bi";


function FullDetails() {
  const location = useLocation();
  const navigate = useNavigate(); // Use useNavigate for navigation

  if (!location.state || !location.state.data) {
    console.error("Data not available. Redirect to another page or display an error message.");
    return null;
  }

  const { data } = location.state;

  const handleGoBack = () => {
    navigate(-1); // Use navigate with a negative number to navigate back
  };

  return (
    <div className="fulldetails">
     
      <h2 className="heading"> <button onClick={handleGoBack} className="goBack"><BiArrowBack /></button>{data.title} </h2>
      <p>{data.description}</p>
      <a href={data.links} target="_blank">Link</a>
    </div>
  );
}

export default FullDetails;
