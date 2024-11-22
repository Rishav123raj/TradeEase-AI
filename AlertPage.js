import React, { useState, useEffect } from "react";
import { getAlertsData } from "../services/apiService";

function AlertPage() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    async function fetchAlertsData() {
      const data = await getAlertsData();
      setAlerts(data);
    }
    fetchAlertsData();
  }, []);

  return (
    <div className="alert-page">
      <h1>Regulatory Alerts</h1>
      {alerts.length === 0 ? (
        <p>No new alerts.</p>
      ) : (
        <ul>
          {alerts.map((alert, index) => (
            <li key={index}>
              <h3>{alert.title}</h3>
              <p>{alert.message}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AlertPage;
