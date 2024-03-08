import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList/ContactList";
import dummyContacts from "./contacts.js";
import ContactForm from "./components/ContactForm/ContactForm.jsx";

function App() {
  const [contacts, setContacts] = useState(dummyContacts);
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <h1>React Contacts</h1>

      <ContactForm
        onFormSubmissionHandler={(newContact) => {
          const isEmailOrPhoneInContacts = contacts.some((contact) => {
            return (
              contact.phoneNumber === newContact.phoneNumber ||
              contact.email === newContact.email
            );
          });
          if (isEmailOrPhoneInContacts) return;
          const updatedContacts = [...contacts, newContact];
          setContacts(updatedContacts);
        }}
      />
      <div>
        <input
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
          type="text"
          placeholder="Search Contacts"
        />
        <button
          onClick={() => {
            const updatedContacts = contacts.filter((contact) => {
              const lowerCaseName = `
                ${contact.firstName} ${contact.lastName}`.toLowerCase();
              return lowerCaseName.includes(searchText.toLowerCase());
            });
            setContacts(updatedContacts);
          }}
        >
          Search
        </button>
      </div>

      <ContactList
        contacts={contacts}
        onCardDeleteClicked={(phoneNumber) => {
          const updatedContacts = contacts.filter((contact) => {
            return contact.phoneNumber !== phoneNumber;
          });
          setContacts(updatedContacts);
        }}
      />
    </>
  );
}

export default App;
