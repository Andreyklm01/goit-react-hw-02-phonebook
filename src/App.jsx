import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
// import ContactsList from './components/ContactsList';
class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  inputId = uuidv4();
  // переделать ИД
  handleChangeName = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };
  onAdd = name => {
    const newContact = {
      id: uuidv4(),
      name,
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
    const { name } = this.state;

    if (!name) return;
    this.onAdd(name);
    this.resetInput();
  };

  resetInput = () => {
    this.setState({ name: '' });
  };

  renderName = () => {
    const { contacts } = this.state;
    return contacts.map(({ id, name }) => <li key={id}>{name}</li>);
  };

  render() {
    const { contacts, name } = this.state;
    const renderName = this.renderName();

    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <h2>Name</h2>
          <form onClick={this.handleSubmit}>
            <label htmlFor={this.inputId}>
              <input
                id={this.inputId}
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                onChange={this.handleChangeName}
              />
            </label>
            <button type="submit">Add contact</button>
          </form>
        </div>

        <div>
          <h2>Contacts</h2>
          <ul>{renderName}</ul>
        </div>
      </>
    );
  }
}

export default App;
