import { ContactsList } from '../PhoneBook/PhoneBook.module';
import ContactsArray from './ContactsArray';

export default function Contacts({ contacts, onDeleteContact }) {
  return (
    <>
      <ContactsList>
        {contacts.map(contact => (
          <ContactsArray
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ContactsList>
    </>
  );
}
