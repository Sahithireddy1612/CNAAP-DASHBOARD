import React from 'react';
import { useSelector } from 'react-redux';
import './dashboardList.css';

const DashboardList = ({ searchQuery, openModal }) => {
  const dashboards = useSelector((state) => state.widgets.dashboards);

  return (
    <div className="dashboard-list">
      {dashboards.map((dashboard) => (
        <div key={dashboard.name} className="dashboard">
          <div className="dashboard-header">
            <h2>{dashboard.name}</h2>
            <button onClick={openModal} className="add-widget-button">+ Add Widget</button>
          </div>
          {dashboard.categories.map((category) => (
            <div key={category.name} className="category">
              <div className="widget-container">
                {category.widgets
                  .filter(widget => 
                    widget.name.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((widget) => (
                  <div key={widget.name} className="widget">
                    <h4>{widget.name}</h4>
                    <p>{widget.text}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DashboardList;
