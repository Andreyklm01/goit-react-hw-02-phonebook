const ContactsList = ({ сontacts }) => (
  <ul>
    {сontacts.map(({ id, name, number }) => (
      <li key={id}>
        {name}:{number}
      </li>
    ))}
  </ul>
);

export default ContactsList;
