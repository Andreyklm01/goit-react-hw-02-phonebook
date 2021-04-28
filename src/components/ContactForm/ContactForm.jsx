import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  inputNameId = uuidv4();
  inputNumberId = uuidv4();

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;

    if (!name || !number) return;
    this.props.onSubmit(name, number);
    this.resetInput();
  };

  resetInput = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <div className={s.formContainer}>
        <form className={s.form} onSubmit={this.handleSubmit}>
          <h3 className={s.title}>Name</h3>
          <label htmlFor={this.inputNameId}>
            <input
              className={s.input}
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
          <h3 className={s.title}>Number</h3>
          <label htmlFor={this.inputNumberId}>
            <input
              className={s.input}
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
          <button className={s.button} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};

export default ContactForm;
