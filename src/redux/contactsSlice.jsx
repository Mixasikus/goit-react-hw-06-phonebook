import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const { createSlice } = require('@reduxjs/toolkit');

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    contactsArray(data, action) {
      switch (action.type) {
        case 'contacts/contactsArray':
          // return [...data.contacts, action.payload];
          // data += action.payload;
          data.contacts.push(action.payload);

          return;
        default:
          break;
      }
    },
    deleteId(data, action) {
      switch (action.type) {
        case 'contacts/deleteId':
          data.contacts.filter(contact => contact.id !== action.payload);
          return;
        default:
          break;
      }
      // console.log(action.type);
      //  data.contacts.filter(contact => contact.id !== action.payload);
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { contactsArray, deleteId } = contactsSlice.actions;

// Selectors
export const getContactsArray = state => state.contacts.contacts;
