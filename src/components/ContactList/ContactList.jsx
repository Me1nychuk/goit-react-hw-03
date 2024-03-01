import Contact from "./Contact/Contact";
import css from "./ContactList.module.css"

const ContactList = ({contacts, handleDelete}) => {
  return (
    <div className={css.wrapper}>
      {contacts.map(({ name, number, id }) => (
        <Contact key={id} id={id} username={name} number={number} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default ContactList
