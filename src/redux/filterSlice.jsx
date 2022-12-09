const { createSlice } = require('@reduxjs/toolkit');

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts(data, action) {
      return action.payload;
    },
  },
});

export const { filterContacts } = filterSlice.actions;
