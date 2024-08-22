import React from 'react';
import Category from './Category';

const Dashboard = ({ dashboard }) => {
  return (
    <div className="dashboard">
      <h2>{dashboard.name}</h2>
      {dashboard.categories.map((category, index) => (
        <Category key={index} category={category} />
      ))}
    </div>
  );
};

export default Dashboard;
