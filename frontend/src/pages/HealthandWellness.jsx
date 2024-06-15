// HealthandWellness.jsx

import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import "../App.css"

function HealthandWellness() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your server
    fetch("http://localhost:3001/agricutlure")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div>
      <h1 className="heading">Health & Wellness Schemes</h1>
      {data.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
}

export default HealthandWellness;
