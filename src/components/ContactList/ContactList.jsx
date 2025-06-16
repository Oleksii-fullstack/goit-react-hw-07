import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
// import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter.name);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
