import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Container } from './App.styled';
import ContactForm from './contactForm/';
import ContactList from './contactList';
import Filter from './filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmit = (values, { resetForm }) => {
    // const { name, number } = values;
    const contact = { ...values, id: nanoid() };
    const dublicateContact = this.findDublicateContact(
      contact,
      this.state.contacts
    );

    dublicateContact
      ? alert(`${contact.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, contact],
        }));
    resetForm();
  };

  onFilterChange = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  findDublicateContact = (contact, contactsList) => {
    return contactsList.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    );
  };

  getFilteredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmit} />

        {this.state.contacts.length > 0 && (
          <h2 style={{ fontSize: 30 }}>Contacts:</h2>
        )}
        {this.state.contacts.length > 0 && (
          <Filter
            value={this.state.filter}
            onFilterChange={this.onFilterChange}
          />
        )}

        <ContactList
          contacts={this.getFilteredContacts()}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
