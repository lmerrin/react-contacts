import { useState } from "react";
import "./App.css";
import ContactCard from "./components/ContactCard/ContactCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <h1>React Contacts</h1>
      <ContactCard 
        name="Jenny Smith"
        phone="808-867-5309"
        e-mail="jenny@gmail.com"
        />
    </>
  );
}

export default App;
