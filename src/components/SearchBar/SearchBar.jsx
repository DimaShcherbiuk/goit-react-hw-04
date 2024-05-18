import toast from "react-hot-toast";
import { useState } from "react";
import css from "./SearchBar.module.css";

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;

    if (query.trim() === "") {
      toast.error("Please enter a search term!");
      return;
    }

    onSubmit(query);
    form.reset();
  };

  const handleChange = (evt) => {
    setQuery(evt.target.value);
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css["form-container"]}>
        <input
          name="topic"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
          className={css["search-input"]}
        />
        <button type="submit" className={css["search-btn"]}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchForm;
