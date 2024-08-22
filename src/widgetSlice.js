import { createSlice } from '@reduxjs/toolkit';
import dashboardData from './dashboardData.json';

const initialState = {
  dashboards: dashboardData.dashboards, 
};

const widgetSlice = createSlice({
  name: 'widgets',
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { dashboardName, categoryName, widget } = action.payload;
      const dashboard = state.dashboards.find(d => d.name === dashboardName);
      const category = dashboard.categories.find(c => c.name === categoryName);
      category.widgets.push(widget);
    },
    removeWidget: (state, action) => {
      const { dashboardName, categoryName, widgetName } = action.payload;
      const dashboard = state.dashboards.find(d => d.name === dashboardName);
      const category = dashboard.categories.find(c => c.name === categoryName);
      category.widgets = category.widgets.filter(w => w.name !== widgetName);
    },
  },
});

export const { addWidget, removeWidget } = widgetSlice.actions;

export default widgetSlice.reducer;
