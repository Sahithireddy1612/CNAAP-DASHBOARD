import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWidget } from './widgetSlice';

const AddWidgetModal = ({ isOpen, closeModal }) => {
  const dispatch = useDispatch();
  const dashboards = useSelector((state) => state.widgets.dashboards);

  const [selectedDashboard, setSelectedDashboard] = useState(dashboards[0]?.name || '');
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const handleAddWidget = () => {
    const selectedCategory = dashboards.find(dashboard => dashboard.name === selectedDashboard).categories[0];
    dispatch(addWidget({ categoryName: selectedCategory.name, widget: { name: widgetName, text: widgetText } }));
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add Widget</h2>
        <select value={selectedDashboard} onChange={(e) => setSelectedDashboard(e.target.value)}>
          {dashboards.map((dashboard, index) => (
            <option key={index} value={dashboard.name}>{dashboard.name}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Widget Name"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Widget Data"
          value={widgetText}
          onChange={(e) => setWidgetText(e.target.value)}
        />
        <button onClick={handleAddWidget}>Add</button>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default AddWidgetModal;
