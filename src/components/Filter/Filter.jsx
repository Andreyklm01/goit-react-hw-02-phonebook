import { v4 as uuidv4 } from 'uuid';
const filterId = uuidv4();

const Filter = ({ name, onChange }) => (
  <label htmlFor={filterId}>
    Find Contacts by name:
    <input id={filterId} type="text" value={name} onChange={onChange} />
  </label>
);

export default Filter;
