import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [staffCount, setStaffCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);

  // Simulate fetching data from a backend (e.g., database)
  useEffect(() => {
    setStaffCount(4); // Simulated data
    setOrdersCount(2); // Simulated data
  }, []);

  return (
    <div className="dashboard-container">
      <h2>HRMS Dashboard</h2>
      <div className="dashboard-stats">
        <div className="stat">
          <h3>Total Staff</h3>
          <p>{staffCount}</p>
        </div>
        <div className="stat">
          <h3>Total Procurement Orders</h3>
          <p>{ordersCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
