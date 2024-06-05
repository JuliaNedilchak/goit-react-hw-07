import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";

const ContactList = () => {
  const selectContacts = useSelector(
    (state) => state.contactbox.contacts.items
  );
  const selectNameFilter = useSelector((state) => state.filterbox.filters.name);
  const filteredContacts = selectContacts.filter((contact) =>
    contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
  );
  return (
    <ul>
      {filteredContacts.map((contact) => {
        return (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
