import "./ContactCard.css";

export default function ContactCard({ name, phone, email, onDeleteClicked }) {
  return (
    <div className="contact-card">
      <h3>{name}</h3>
      <p>Phone:{phone}</p>
      <p>Email:{email}</p>
      <button onClick={() => onDeleteClicked(phone)}>Delete</button>
    </div>
  );
}
