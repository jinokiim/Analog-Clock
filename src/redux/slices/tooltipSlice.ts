import { createSlice } from '@reduxjs/toolkit';

const tooltipSlice = createSlice({
  name: 'tooltip',
  initialState: { isVisible: false },
  reducers: {
    showTooltip: (state) => {
      state.isVisible = true;
    },
    hideTooltip: (state) => {
      state.isVisible = false;
    }
  }
});

export const { showTooltip, hideTooltip } = tooltipSlice.actions;
export const selectTooltip = (state: { tooltip: any }) => state.tooltip;

export default tooltipSlice.reducer;
