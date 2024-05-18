import toast from "react-hot-toast";
import { useState } from "react";
import css from "./SearchBar.module.css";
import { FiSearch } from "react-icons/fi";

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (query.trim() === "") {
      toast.error("Please enter a search term!");
      return;
    }

    onSubmit(query);
    setQuery("");
  };

  const handleChange = (evt) => {
    setQuery(evt.target.value);
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          name="topic"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
          className={css.input}
        />
        <button className={css.button} type="submit">
          <FiSearch size="20px" />
        </button>
      </form>
    </header>
  );
};

export default SearchForm;
