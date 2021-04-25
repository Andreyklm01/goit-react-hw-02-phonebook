import { Component } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  // !!! доделать
  handleChangeName = event => {
    this.setState({ name: event.target.value });
  };
  // !!!добавляется 2 раза, нужен превстейт
  addToContacts = event => {
    event.preventDefault();
    const { contacts, name } = this.state;

    this.setState(() => {
      return contacts.push(name);
    });
  };

  render() {
    const { contacts, name } = this.state;
    console.log(name);
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <h2>Name</h2>
          <form>
            <label htmlFor="">
              <input
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                onChange={this.handleChangeName}
              />
            </label>
            <button type="submit" onClick={this.addToContacts}>
              Add contact
            </button>
          </form>
        </div>

        <div>
          <h2>Contacts</h2>
          <ul>
            <li>{contacts}</li>
          </ul>
        </div>
      </>
    );
  }
}

export default App;
