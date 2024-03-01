import "./ContactForm.css";
import { useState } from "react";
import MaskedInput from "react-text-mask";

export default function ContactForm({ onFormSubmissionHandler }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(" ");
  const [email, setEmail] = useState(" ");

  return (
    <form
      className="form-container"
      onSubmit={(event) => {
        event.preventDefault();

        const newContact = { firstName, lastName, phoneNumber, email };
        onFormSubmissionHandler(newContact);
      }}
    >
      <label>
        First Name:{" "}
        <input
          type="text"
          required
          className="form-input"
          onChange={(event) => {
            const value = event.target.value;
            setFirstName(value);
          }}
        />
      </label>

      <label>
        Last Name:{" "}
        <input
          type="text"
          required
          className="form-input"
          onChange={(event) => {
            const value = event.target.value;
            setLastName(value);
            console.log(lastName);
          }}
        />
      </label>

      <label>
        Phone Number:{" "}
        <MaskedInput
          mask={[
            /\d/,
            /\d/,
            /\d/,
            "-",
            /\d/,
            /\d/,
            /\d/,
            "-",
            /\d/,
            /\d/,
            /\d/,
            /\d/,
          ]}
          guide={true}
          required
          pattern="\d{3}-\d{3}-\d{4}"
          className="form-input"
          onChange={(event) => {
            const value = event.target.value;
            setPhoneNumber(value);
          }}
        />
      </label>

      <label>
        Email Address:{" "}
        <input
          type="email"
          required
          className="form-input"
          onChange={(event) => {
            const value = event.target.value;
            setEmail(value);
          }}
        ></input>
      </label>

      <button type="submit" className="form-buttom">
        Create Contact
      </button>
    </form>
  );
}
