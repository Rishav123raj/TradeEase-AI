const API_BASE_URL = "http://localhost:5000/api";

export async function getComplianceData() {
  try {
    const response = await fetch(`${API_BASE_URL}/compliance`);
    if (!response.ok) throw new Error("Failed to fetch compliance data.");
    return response.json();
  } catch (error) {
    console.error("Error fetching compliance data:", error);
    return [];
  }
}

export async function getIncentivesData() {
  try {
    const response = await fetch(`${API_BASE_URL}/incentives`);
    if (!response.ok) throw new Error("Failed to fetch incentives data.");
    return response.json();
  } catch (error) {
    console.error("Error fetching incentives data:", error);
    return [];
  }
}

export async function getAlertsData() {
  try {
    const response = await fetch(`${API_BASE_URL}/alerts`);
    if (!response.ok) throw new Error("Failed to fetch alerts data.");
    return response.json();
  } catch (error) {
    console.error("Error fetching alerts data:", error);
    return [];
  }
}
