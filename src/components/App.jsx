import Form from './PhoneBook/Form';
// import Filter from './PhoneBook/Filter';
import { nanoid } from 'nanoid';
import { ContainerForm } from './PhoneBook/PhoneBook.module';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Contacts from './Contacts/Contacts';
import { useDispatch, useSelector } from 'react-redux';
import { contactsArray } from 'redux/contactsSlice';
// import { filterContacts } from 'redux/filterSlice';

export default function App() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  // const [filter, setFilter] = useState('');

  // dispatch(filterContacts(5));

  const addContacts = data => {
    const { name, number } = data;

    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    const namesArray = contacts.map(contact => {
      return contact.name;
    });

    if (namesArray.find(person => person === name)) {
      toast.error('Такое уже есть');
    } else {
      dispatch(contactsArray(contact));
    }
  };

  const deleteContact = contactId => {
    contactsArray(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
    // contacts.filter(contact => contact.id !== contactId);
    // contacts.filter(contact => console.log(contact.id === contactId));
    // .filter(contact => contact.id !== contactId);
  };

  // const changeFilter = e => {
  //   dispatch(filterContacts(e.currentTarget.value));
  //   // filter(e.currentTarget.value);
  // };

  const normalizedFilter = filter.toLowerCase();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  // console.log(filter);
  return (
    <>
      <ContainerForm>
        <h1>Phonebook</h1>
        <Form onSubmit={addContacts} />
        <h2>Contacts</h2>
        {/* <Filter value={filter} onChange={changeFilter} /> */}
        <Contacts contacts={visibleContacts} onDeleteContact={deleteContact} />
      </ContainerForm>
      <ToastContainer autoClose={3000} />
    </>
  );
}
