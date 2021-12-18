import React from 'react';
import './App.css';

import Header from './header/header.component';
import AddContact from './add-contact/add-contact.component';
import ContactList from './contact-list/contact-list.component';


function App() {

  const contacts = [
    {
      id: '1',
      name: 'Hairs',
      email: 'mharisshaikh@outlook.com'
    },
    {
      id: '2',
      name: 'Umer',
      email: 'umer@outlook.com'
    }
  ]

  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
