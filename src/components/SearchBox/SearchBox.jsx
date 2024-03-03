import { useDispatch, useSelector } from "react-redux";
import { filterContacts } from "../../redux/contacts/filterSlice";
import { selectFilters } from "../../redux/contacts/selectors";
export const SearchBox = () => {
  const dispatch = useDispatch()
  const filter = useSelector(selectFilters)

  const changeFilter = (e) => dispatch(filterContacts(e.target.value.trim()));
  return (
    <div className="seachBox">
      Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={changeFilter}
        />
      </div>
  );
};