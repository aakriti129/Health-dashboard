import React, { useState } from "react";
import axios from "axios";

const AddServiceForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [interval, setInterval] = useState(30);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/services", { name, endpointUrl: url, checkIntervalSeconds: interval, active: true })
      .then((response) => {
        onAdd(response.data);
        setName("");
        setUrl("");
        setInterval(30);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Service</h3>
      <input type="text" placeholder="Service Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="url" placeholder="Endpoint URL" value={url} onChange={(e) => setUrl(e.target.value)} required />
      <input type="number" placeholder="Check Interval (s)" value={interval} onChange={(e) => setInterval(e.target.value)} required />
      <button type="submit">Add Service</button>
    </form>
  );
};

export default AddServiceForm;
