import CardList from "./componenets/card-list/card-list.component";
import SearchBox from "./componenets/search-box/search-box.component";
import { useEffect, useState } from "react";
import "./App.css";
import { render } from "@testing-library/react";

const App = () => {
  const [searchedField, setSearchedfield] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([monsters]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchedField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchedField]);

  const onSearchChange = (event) => {
    const searchedFieldstring = event.target.value.toLocaleLowerCase();
    setSearchedfield(searchedFieldstring);
  };
  return (
    <div className="App">
      <h1 className="app-title">Monster-Rolodex (Functional)</h1>

      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search Monster"
        className="monster-search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};
export default App;
