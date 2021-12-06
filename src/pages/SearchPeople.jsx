import { useState } from "react";
import { SmallLoader } from "../components/Skeleton";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { SearchPeopleByValue } from "../services/apiService";
import { SearchForm } from "../components/SearchForm";
import { SearchList } from "../components/SearchList";
import { Section } from "../components/Section";
export default function SearchPeople() {
  const [heroes, setHeroes] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const getValueAndFetchPeople = async (query) => {
    setHeroes(null);
    setLoading(true);
    const newPeople = await SearchPeopleByValue(query);
    if (newPeople.length === 0) {
      setLoading(false);
      return toast.warning(
        "👁 We didn't find anything, make sure you have the correct value!",
      );
    }
    setHeroes(newPeople);
    setLoading(false);
    navigate(`?search=${query}`);
    return toast.success(`Success, we found ${newPeople.length} heroes`);
  };

  return (
    <Section classname={"search"}>
      <SearchForm submit={getValueAndFetchPeople} />
      {heroes && <SearchList people={heroes} />}
      {loading && <SmallLoader />}
    </Section>
  );
}
