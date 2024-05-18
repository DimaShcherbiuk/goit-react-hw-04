import toast from "react-hot-toast";
import { useState } from "react";
// import css from "./SearchBar.module.css";

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
    <header>
      <form onSubmit={handleSubmit}>
        <input
          name="topic"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchForm;
