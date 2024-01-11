import { createSlice } from '@reduxjs/toolkit';

const tooltipSlice = createSlice({
  name: 'tooltip',
  initialState: { isVisible: false, content: '' },
  reducers: {
    showTooltip: (state, action) => {
      state.isVisible = true;
      state.content = action.payload;
    },
    hideTooltip: (state) => {
      state.isVisible = false;
      state.content = '';
    }
  }
});

export const { showTooltip, hideTooltip } = tooltipSlice.actions;
export const selectTooltip = (state: { tooltip: any }) => state.tooltip;

export default tooltipSlice.reducer;
