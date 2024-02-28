import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import dummyContacts from "./contacts.js";
import ContactForm from "./components/ContactForm/ContactForm.jsx";


function App() {
  const [contacts, setContacts] = useState(dummyContacts);

  return (
    <>
      <h1>React Contacts</h1>

      <ContactForm
        onFormSubmissionHandler={(newContact) => {
          const updatedContacts = [...contacts, newContact];
          setContacts(updatedContacts);
        }}
      />

      <ContactList contacts={contacts} />
    </>
  );
}

export default App;
