import "./ContactList.css";
import ContactCard from "../ContactCard/ContactCard";

export default function ContactList({contacts, onCardDeleteClicked}) {
  return (
    <ul className="contact-list">
      {contacts &&
        contacts.map((contact) => {
          return (
            <ContactCard
              key={contact.phoneNumber}
              name={`${contact.firstName} ${contact.lastName}`}
              phone={contact.phoneNumber}
              email={contact.email}
              onDeleteClicked={onCardDeleteClicked}
            />
          );
        })}
    </ul>
  );
}
