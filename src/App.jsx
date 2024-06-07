import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useEffect } from "react";
//import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../src/redux/contactsOps";
import { changeFilter, selectFiltered } from "./redux/filtersSlice";
import { addContact } from "./redux/contactsOps/";
import { fetchContacts } from "./redux/contactsOps";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import {
  selectContactsList,
  selectError,
  selectIsLoading,
} from "./redux/contactsSlice";
import Loader from "./components/Loader/Loader";

const App = () => {
  /* const initialContactList = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];*/
  //const [contacts, setContacts] = useState(() => {
  //const stringified = localStorage.getItem("contacts");
  //if (!stringified) return initialContactList;
  //const parsed = JSON.parse(stringified);
  //return parsed;
  //});
  const dispatch = useDispatch();
  const selectContacts = useSelector(selectContactsList);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);
  const selectNameFilter = useSelector(selectFiltered);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  //useEffect(() => {
  //localStorage.setItem("contacts", JSON.stringify(contacts));
  //}, [contacts]);
  //useEffect(() => {
  //dispatch(fetchContacts);
  //}, [dispatch]);

  const onAddContact = (formData) => {
    //const newList = {
    //...formData,
    //id: nanoid(),
    //};

    dispatch(addContact(formData));
    // setContacts([...contacts, newList]);
  };

  //const [filter, setFilter] = useState("");

  const onChangeContact = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  const filteredList = selectContacts.filter((contact) =>
    contact.name.toLowerCase().includes(selectNameFilter.toLocaleLowerCase())
  );
  const onDeleteContact = (userId) => {
    //setContacts((prevList) =>
    //prevList.filter((contact) => contact.id !== userId)
    //);
    dispatch(deleteContact(userId));
  };
  return (
    <div>
      <h1>Phonebook</h1>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
