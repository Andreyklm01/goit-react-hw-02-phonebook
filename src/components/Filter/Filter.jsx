import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import s from './Filter.module.css';

const filterId = uuidv4();

const Filter = ({ name, onChange }) => (
  <div className={s.container}>
    <p className={s.text}>Find Contacts by name:</p>
    <label htmlFor={filterId}>
      <input className={s.input} id={filterId} type="text" value={name} onChange={onChange} />
    </label>
  </div>
);

Filter.propTypes = {
  name: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
