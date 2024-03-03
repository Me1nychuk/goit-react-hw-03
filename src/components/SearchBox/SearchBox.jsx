import { useId, useState } from "react";
import css from "./SearchBox.module.css";
import PropTypes from "prop-types";

const SearchBox = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const searchId = useId();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value.trim().toLowerCase());
  };

  return (
    <div className={css.searchWrapper}>
      <label className={css.searchLabel} htmlFor={searchId}>
        Search
      </label>
      <input
        className={css.searchInput}
        type="text"
        name="searchInput"
        id={searchId}
        placeholder="Search contacts..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

SearchBox.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBox;
