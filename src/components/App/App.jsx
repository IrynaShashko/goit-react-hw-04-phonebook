import React, { Component } from 'react';
import { AppContainer, H1, H2, PhonebookContainer } from '../App/App.styled';
import ContactsForm from '../Phonebook/Phonebook';
import Filter from 'components/Filter/Filter';
import Contacts from 'components/Contacts/Contacts';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSumbit = data => {
    this.setState({
      contacts: [...this.state.contacts, data],
    });
  };
  deleteContact = id => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== id),
    });
  };
  handleChange = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts) || [];
    this.setState({
      contacts: parsedContacts,
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const normalizedContacts = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedContacts)
    );

    return (
      <AppContainer>
        <PhonebookContainer>
          <H1>Phonebook</H1>
          <ContactsForm onSubmit={this.formSumbit} />
          <H2>Contacts</H2>
          <Filter filter={this.state.filter} handleChange={this.handleChange} />
          {visibleContacts && (
            <Contacts
              contacts={visibleContacts}
              deleteContact={this.deleteContact}
            />
          )}
        </PhonebookContainer>
      </AppContainer>
    );
  }
}
export default App;
