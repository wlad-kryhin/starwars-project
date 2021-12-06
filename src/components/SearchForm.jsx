import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
export const SearchForm = ({ submit }) => {
  const [query, setQuery] = useState("");
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (query === "") {
      return toast.error("😲 Please enter something");
    }
    if (!query.trim()) {
      return toast.error(" 😲 Write something other!");
    }
    submit(query);
    setQuery("");
    e.target.reset();
  };
  return (
    <form onSubmit={handleFormSubmit} className="form">
      <label className="form__label">
        Find your favorite hero
        <input
          className="form__input"
          type="text"
          name="search"
          onChange={handleInputChange}
          placeholder="Obi-Wan Kenobi"
        />
      </label>
      <button type="submit" className="button">
        search
      </button>
    </form>
  );
};
