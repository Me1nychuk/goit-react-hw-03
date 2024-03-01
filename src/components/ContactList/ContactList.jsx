import Contact from "./Contact/Contact";
import css from "./ContactList.module.css"
import PropTypes from 'prop-types';

const ContactList = ({contacts, handleDelete}) => {
  return (
    <div className={css.wrapper}>
      {contacts.map(({ name, number, id }) => (
        <Contact key={id} id={id} username={name} number={number} handleDelete={handleDelete} />
      ))}
    </div>
  );
}
ContactList.PropTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
}
export default ContactList
