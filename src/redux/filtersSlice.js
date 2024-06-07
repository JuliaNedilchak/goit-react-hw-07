import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

const filtersSlice = createSlice({
  // Ім'я слайсу
  name: "filters", // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE, // Об'єкт редюсерів
  reducers: {
    changeFilter(state, action) {
      state.filters.name = action.payload;
    },
  },
});

// Генератори екшенів
export const { changeFilter } = filtersSlice.actions;
export const selectFilteredContacts = (state) => state.filterbox.filters.name;
// Редюсер слайсу
export const filterReducer = filtersSlice.reducer;
