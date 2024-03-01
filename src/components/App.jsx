import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import './App.css'
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import SearchBox from './SearchBox/SearchBox'
import { nanoid } from 'nanoid'

  const contactsArr = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    
  ];
function App() {
  const [contacts, setContacts] = useState(() => {
    const stringifieldContact = localStorage.getItem("contacts");
    if (!stringifieldContact) return contactsArr;
    
    const parsedContacts = JSON.parse(stringifieldContact);
    return parsedContacts;
  });

  const [filteredContacts , setFilteredContacts ] = useState(contacts);

 useEffect(() => {
   localStorage.setItem("contacts", JSON.stringify(contacts));
   setFilteredContacts(contacts);
  }, [contacts])


  
  const handleDelete = (contactId) =>{
    setContacts((prevState) => {
       return prevState.filter(contact => contact.id !== contactId)
    });
  }
  const handleUpdate = (newContact) => {
    const newParsedContact = {
      id: nanoid(),
      name: newContact.username,
      number: newContact.number,
    }
    setContacts((prevState) => {
      return [
        ...prevState,
       newParsedContact
      ]
    });
  }

  const handleSearch = (newFilter) => { 
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(newFilter));
    setFilteredContacts(filteredContacts);
  };
  

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm handleUpdate={ handleUpdate} />
      <SearchBox handleSearch={handleSearch  } />
      <ContactList contacts={filteredContacts} handleDelete={handleDelete} />
    </>
  )
}

App.PropTypes = {
  contactsArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
   )
 }
export default App
