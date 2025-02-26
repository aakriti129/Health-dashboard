import { useEffect, useState } from "react";
import axios from "axios";

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/services");
      setServices(response.data);
    } catch (error) {
      console.error("Error fetching services", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Monitored Services</h2>
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Endpoint</th>
              <th>Status</th>
              <th>Last Checked</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id}>
                <td>{service.name}</td>
                <td>{service.endpointUrl}</td>
                <td>{service.isActive ? "✅ UP" : "❌ DOWN"}</td>
                <td>N/A</td>
                <td>
                  <button>View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ServiceList;
