import { Link } from "react-router-dom";
export const SearchList = ({ people }) => {
  return (
    <ul className="search__list">
      {people.map(({ name, url }) => {
        const id = url.split("/").reverse()[1];
        return (
          <li key={name} className="search__list--item">
            <Link to={`/${name}/${id}`} className="search__list--link">
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
