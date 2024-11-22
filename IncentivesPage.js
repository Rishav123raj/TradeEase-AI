import React, { useState, useEffect } from "react";
import { getIncentivesData } from "../services/apiService";

function IncentivesPage() {
  const [incentivesData, setIncentivesData] = useState([]);

  useEffect(() => {
    async function fetchIncentivesData() {
      const data = await getIncentivesData();
      setIncentivesData(data);
    }
    fetchIncentivesData();
  }, []);

  return (
    <div className="incentives-page">
      <h1>Incentives & Grants</h1>
      {incentivesData.length === 0 ? (
        <p>Loading incentives...</p>
      ) : (
        <ul>
          {incentivesData.map((incentive, index) => (
            <li key={index}>
              <h3>{incentive.name}</h3>
              <p>{incentive.description}</p>
              <p><strong>Eligibility:</strong> {incentive.eligibility}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default IncentivesPage;
