import css from './style.module.css';
import { Component } from 'react';
import { nanoid } from 'nanoid';

import PhonebookForm from './PhonebookForm';
import ContactItem from './ContactsList';
import ContactsFilter from './ContactsFilter';

class PhonebookClass extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addNewContact = ({ name, number }) => {
    this.setState(prevState => {
      const { contacts } = prevState;

      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      return { contacts: [newContact, ...contacts] };
    });
  };

  handleFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };

  getFilteredContacts() {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });

    return result;
  }

  render() {
    const { addNewContact, handleFilter } = this;
    const contacts = this.getFilteredContacts();

    return (
      <>
        <h2 className={css.title}>Phonebook</h2>
        <PhonebookForm onSubmit={addNewContact} />

        <h2 className={css.title}>Contacts</h2>
        <ContactsFilter handleFilter={handleFilter} />

        <ul>
          {contacts.map(({ id, name, number }) => {
            return <ContactItem key={id} name={name} number={number} />;
          })}
        </ul>
      </>
    );
  }
}

export const App = () => {
  return (
    <div>
      <PhonebookClass />
    </div>
  );
};

PhonebookClass.defaultProps = { contacts: [] };
