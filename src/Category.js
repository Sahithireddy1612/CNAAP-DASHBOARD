import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget, removeWidget } from './widgetSlice';

const Category = ({ category }) => {
  const dispatch = useDispatch();
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const handleAddWidget = () => {
    dispatch(addWidget({ categoryName: category.name, widget: { name: widgetName, text: widgetText } }));
    setWidgetName('');
    setWidgetText('');
  };

  const handleRemoveWidget = (widgetName) => {
    dispatch(removeWidget({ categoryName: category.name, widgetName }));
  };

  return (
    <div className="category">
      <h3>{category.name}</h3>
      {category.widgets.map((widget, index) => (
        <div key={index} className="widget">
          <h4>{widget.name}</h4>
          {widget.text.startsWith('Graph:') ? (
            <div className="graph">{widget.text}</div>
          ) : (
            <p>{widget.text}</p>
          )}
          <button onClick={() => handleRemoveWidget(widget.name)}>✖</button>
        </div>
      ))}
    </div>
  );
};

export default Category;
