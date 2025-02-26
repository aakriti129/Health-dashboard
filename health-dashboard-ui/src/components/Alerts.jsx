import React from "react";

const Alerts = ({ services }) => {
  const downServices = services.filter((s) => !s.isActive);

  return (
    <div>
      <h3>Alerts</h3>
      {downServices.length > 0 ? (
        <ul>
          {downServices.map((service) => (
            <li key={service.id} className="text-red-500">
              {service.name} is DOWN ❌
            </li>
          ))}
        </ul>
      ) : (
        <p>No alerts, all services are up! ✅</p>
      )}
    </div>
  );
};

export default Alerts;
