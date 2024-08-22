import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const Search = () => {
  const [query, setQuery] = useState('');
  const dashboards = useSelector((state) => state.widgets.dashboards);

  const filteredWidgets = dashboards.flatMap(dashboard =>
    dashboard.categories.flatMap(category =>
      category.widgets.filter(widget =>
        widget.name.toLowerCase().includes(query.toLowerCase())
      )
    )
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search widgets..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="search-results">
        {filteredWidgets.map((widget, index) => (
          <div key={index} className="widget">
            <h4>{widget.name}</h4>
            <p>{widget.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
