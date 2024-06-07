import { useDispatch, useSelector } from "react-redux";

import { changeFilter, selectFilteredContacts } from "../../redux/filtersSlice";

const SearchBox = () => {
  const selectNameFilter = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const onChangeContact = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div>
      <h2>Find contacts by name</h2>
      <input
        type="text"
        placeholder="search..."
        value={selectNameFilter}
        onChange={onChangeContact}
      ></input>
    </div>
  );
};

export default SearchBox;
