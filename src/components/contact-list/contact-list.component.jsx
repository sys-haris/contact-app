import React from 'react';
import ContactCard from '../contact-card/contact-card.component'

const ContactList = ( { contacts } ) => {
  const renderContactList = contacts.map( ( contact ) => {
    return (
      <ContactCard contact={ contact } key={ contact.id } />
    )
  } )
  return (
    <div className="ui celled list"> {renderContactList } </div>

  )
}

export default ContactList;