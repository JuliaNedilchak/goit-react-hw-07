import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import {
  selectContactsList,
  selectFilteredContacts,
} from "../../redux/contactsSlice";
import { selectFiltered } from "../../redux/filtersSlice";
//import { useMemo } from "react";

const ContactList = () => {
  const selectContacts = useSelector(selectContactsList);
  const selectNameFilter = useSelector(selectFiltered);
  const filteredContacts = useSelector(selectFilteredContacts);
  //const filteredContacts = selectContacts.filter((contact) =>
  //contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
  //);
  /*const filteredContacts = useMemo(() => {
    selectContacts.filter((contact) => {
      return contact.name
        .toLowerCase()
        .includes(selectNameFilter.toLowerCase());
    });*/
  //}, [selectContacts, selectNameFilter]);
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
