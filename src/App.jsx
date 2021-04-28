import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';

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

  addContact = (name, number) => {
    const newContact = {
      id: uuidv4(),
      name,
      number,
    };
    const findContactsMatch = this.state.contacts.find(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });

    findContactsMatch
      ? alert(`${name.toUpperCase()} is allready in contacts`)
      : this.setContacts(newContact);
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  setContacts = newContact => {
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  filterContacts = ({ target }) => {
    this.setState({ filter: target.value });
  };

  visibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const visibleContacts = this.visibleContacts();
    return (
      <>
        <h1 className="main-title">Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <div>
          <h2 className="subtitle">Contacts</h2>
          <Filter name={this.state.filter} onChange={this.filterContacts} />
          <ContactsList
            сontacts={visibleContacts}
            onDelete={this.deleteContact}
          />
        </div>
      </>
    );
  }
}

export default App;
