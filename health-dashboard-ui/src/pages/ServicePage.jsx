import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ServicePage = () => {
  const { id } = useParams();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/services/${id}/checks`).then((response) => {
      setHistory(response.data);
    });
  }, [id]);

  return (
    <div>
      <h2>Service Health Check History</h2>
      <ul>
        {history.map((check) => (
          <li key={check.timestamp}>
            {new Date(check.timestamp).toLocaleString()} - {check.isUp ? "✅ UP" : "❌ DOWN"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicePage;
