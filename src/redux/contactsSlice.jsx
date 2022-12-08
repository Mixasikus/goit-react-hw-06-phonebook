const { createSlice } = require('@reduxjs/toolkit');

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    contactsArray(data, action) {
      data.push(action.payload);
    },
  },
});

export const { contactsArray } = contactsSlice.actions;
