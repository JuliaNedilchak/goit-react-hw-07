import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectContactsList } from "../../redux/contactsSlice";
import { selectFilteredContacts } from "../../redux/filtersSlice";

const ContactList = () => {
  const selectContacts = useSelector(selectContactsList);
  const selectNameFilter = useSelector(selectFilteredContacts);
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
