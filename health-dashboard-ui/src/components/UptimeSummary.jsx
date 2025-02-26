import React from "react";

const UptimeSummary = ({ services }) => {
  const total = services.length;
  const up = services.filter((s) => s.isActive).length;
  const down = total - up;

  return (
    <div>
      <h3>Uptime Summary</h3>
      <p>Total Services: {total}</p>
      <p>Up: {up} ✅</p>
      <p>Down: {down} ❌</p>
    </div>
  );
};

export default UptimeSummary;
