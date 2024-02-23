import React from "react";
import "./ContactList.css";
import ContactCard from "../ContactCard/ContactCard";

export default function ContactList({contacts}) {
  return (
    <ul className="contact-list">
      {contacts &&
        contacts.map((contact) => {
          return (
            <ContactCard
              key={contact.phoneNumber}
              name={`${contact.firstName} ${contacts[0].lastName}`}
              phone={contact.phoneNumber}
              e-mail={contact.email}
            />
          );
        })}
    </ul>
  );
}
