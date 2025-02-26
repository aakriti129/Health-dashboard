import React, { useEffect, useState } from "react";
import axios from "axios";
import ServiceList from "../components/ServiceList";
import UptimeSummary from "../components/UptimeSummary";
import Alerts from "../components/Alerts";

const Dashboard = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/services").then((response) => {
      setServices(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Health Dashboard</h1>
      <UptimeSummary services={services} />
      <Alerts services={services} />
      <ServiceList services={services} />
    </div>
  );
};

export default Dashboard;
