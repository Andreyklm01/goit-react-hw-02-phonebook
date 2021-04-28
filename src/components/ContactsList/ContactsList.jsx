const ContactsList = ({ сontacts, onDelete }) => (
  <ul>
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

export default ContactsList;
