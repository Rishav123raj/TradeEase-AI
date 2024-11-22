import React, { useState, useEffect } from "react";
import { getComplianceData } from "../services/apiService";

function CompliancePage() {
  const [complianceData, setComplianceData] = useState([]);

  useEffect(() => {
    async function fetchComplianceData() {
      const data = await getComplianceData();
      setComplianceData(data);
    }
    fetchComplianceData();
  }, []);

  return (
    <div className="compliance-page">
      <h1>Compliance Guidelines</h1>
      {complianceData.length === 0 ? (
        <p>Loading compliance data...</p>
      ) : (
        <ul>
          {complianceData.map((compliance, index) => (
            <li key={index}>
              <h3>{compliance.title}</h3>
              <p>{compliance.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CompliancePage;
