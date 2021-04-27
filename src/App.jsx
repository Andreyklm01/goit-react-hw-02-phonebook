import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
// import ContactsList from './components/ContactsList';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  inputNameId = uuidv4();
  inputNumberId = uuidv4();
  // переделать ИД

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  onAdd = (name, number) => {
    const newContact = {
      id: uuidv4(),
      name,
      number,
    };
    console.log(newContact);
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;

    if (!name || !number) return;
    this.onAdd(name, number);
    this.resetInput();
  };

  resetInput = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  renderContact = () => {
    const { contacts } = this.state;
    return contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name}:{number}
      </li>
    ));
  };

  render() {
    const { name, number } = this.state;
    const renderContact = this.renderContact();

    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <h2>Name</h2>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor={this.inputNameId}>
              Name
              <input
                id={this.inputNameId}
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor={this.inputNumberId}>
              Number
              <input
                id={this.inputNumberId}
                type="tel"
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                onChange={this.handleChange}
              />
            </label>
            <button type="submit">Add contact</button>
          </form>
        </div>

        <div>
          <h2>Contacts</h2>
          <ul>{renderContact}</ul>
        </div>
      </>
    );
  }
}

export default App;
