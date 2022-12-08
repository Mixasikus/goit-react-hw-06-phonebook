const { createSlice } = require('@reduxjs/toolkit');

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContacts(data, action) {
      //   data += action.payload;
      console.log(action.payload);
    },
  },
});

export const { filterContacts } = filterSlice.actions;
