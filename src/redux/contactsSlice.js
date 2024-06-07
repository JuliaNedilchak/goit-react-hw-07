import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";
import { selectFiltered } from "./filtersSlice";

const INITIAL_STATE = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
  filters: {
    name: "",
  },
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "contacts", // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE, // Об'єкт редюсерів
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.contacts.loading = true;
        state.contacts.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.loading = false;
        state.contacts.error = action.payload;
      })
      .addCase(addContact.pending, (state) => {
        state.contacts.loading = true;
        state.contacts.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.items.push(action.payload);
      })
      .addCase(deleteContact.pending, (state) => {
        state.contacts.loading = true;
        state.contacts.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.contacts.loading = false;
        state.contacts.items = state.contacts.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      }),

  /*reducers: {
    addContact(state, action) {
      state.contacts.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts.items = state.contacts.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },*/
});

// Генератори екшенів
//export const { addContact, deleteContact } = contactsSlice.actions;
export const selectContactsList = (state) => state.contactbox.contacts.items;
export const selectIsLoading = (state) => state.contactbox.contacts.loading;
export const selectError = (state) => state.contactbox.contacts.error;
export const selectFilteredContacts = createSelector(
  [selectContactsList, selectFiltered],
  (selectContacts, selectNameFilter) => {
    return selectContacts.filter((contact) =>
      contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
    );
  }
);
// Редюсер слайсу

export const contactsReducer = contactsSlice.reducer;
