import { v4 as uuidv4 } from 'uuid';
const filterId = uuidv4();

const Filter = ({ name, onChange }) => (
  <label htmlFor={filterId}>
    <input id={filterId} type="text" value={name} onChange={onChange} />
  </label>
);

export default Filter;
