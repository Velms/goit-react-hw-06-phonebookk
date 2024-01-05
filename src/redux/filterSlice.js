import { createSlice } from '@reduxjs/toolkit';

// Исходное состояние фильтра
const initialFilterState = '';

const filterSlice = createSlice({
  name: 'filter', 
  initialState: initialFilterState, 
  reducers: {
    changeFilter(_, action) {
      return action.payload; 
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;