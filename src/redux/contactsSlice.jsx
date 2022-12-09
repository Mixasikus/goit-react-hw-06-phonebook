const { createSlice } = require('@reduxjs/toolkit');

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    contactsArray(data, action) {
      switch (action.type) {
        case 'contacts/contactsArray':
          return [...data, action.payload];

        default:
          break;
      }
    },
    deleteId(data, action) {
      switch (action.type) {
        case 'contacts/deleteId':
          return data.filter(contact => contact.id !== action.payload);

        default:
          break;
      }
    },
  },
});

export const { contactsArray, deleteId } = contactsSlice.actions;
