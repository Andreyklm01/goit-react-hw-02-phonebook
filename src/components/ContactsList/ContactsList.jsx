import PropTypes from 'prop-types';
import s from './ContactsList.module.css';

const ContactsList = ({ сontacts, onDelete }) => (
  <ul className={s.list}>
    {сontacts.map(({ id, name, number }) => (
      <li key={id}>
        {name}:{number}
        <button type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.string),
  onDelete: PropTypes.func,
};
export default ContactsList;
