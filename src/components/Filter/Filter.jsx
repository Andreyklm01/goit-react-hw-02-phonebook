import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import s from './Filter.module.css';

const filterId = uuidv4();

const Filter = ({ name, onChange }) => (
  <label htmlFor={filterId}>
    Find Contacts by name:
    <input id={filterId} type="text" value={name} onChange={onChange} />
  </label>
);

Filter.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
