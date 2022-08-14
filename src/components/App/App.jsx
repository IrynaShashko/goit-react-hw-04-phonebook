import React, { useState } from 'react';
import { AppContainer, H1, H2, PhonebookContainer } from '../App/App.styled';
import ContactsForm from '../Phonebook/Phonebook';
import Filter from 'components/Filter/Filter';
import Contacts from 'components/Contacts/Contacts';
import { useEffect } from 'react';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [search, setSearch] = useState('');

  const formSumbit = (name, number) => {
    setContacts(prevState => [...prevState, { name, number }]);
  };
  const deleteContact = id => {
    console.log(id);
    setContacts(contacts.filter(contact => contact.id !== id));
    // setContacts(contacts.filter(contact => contact.id !== id));
  };
  const handleChange = e => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const contact = window.localStorage.getItem('contacts');
    const parsedContact = JSON.parse(contact) || [];
    setContacts(parsedContact);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const normalizedContacts = search.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedContacts)
  );

  return (
    <AppContainer>
      <PhonebookContainer>
        <H1>Phonebook</H1>
        <ContactsForm onSubmit={formSumbit} />
        <H2>Contacts</H2>
        <Filter search={search} handleChange={handleChange} />
        {visibleContacts && (
          <Contacts contacts={visibleContacts} deleteContact={deleteContact} />
        )}
      </PhonebookContainer>
    </AppContainer>
  );
};

export default App;
