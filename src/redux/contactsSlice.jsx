import { persistReducer } from 'redux-persist';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import storage from 'redux-persist/lib/storage';
const { createSlice } = require('@reduxjs/toolkit');

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    contactsArray(data, action) {
      const { name, number } = action.payload;

      const contact = {
        id: nanoid(),
        name: name,
        number: number,
      };

      const namesArray = data.contacts.map(contact => {
        return contact.name;
      });

      switch (action.type) {
        case 'contacts/contactsArray':
          if (namesArray.find(person => person === name)) {
            toast.error('Такое уже есть');
          } else {
            data.contacts.push(contact);
          }
          return;
        default:
          break;
      }
    },
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
