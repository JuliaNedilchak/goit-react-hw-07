import { useDispatch } from "react-redux";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";
const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const onDeleteContact = (userId) => {
    dispatch(deleteContact(userId));
  };
  return (
    <div className={css.block}>
      <div className={css.contactDetail}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button
        className={css.buttonDelete}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
