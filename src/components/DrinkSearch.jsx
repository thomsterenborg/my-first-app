import { useState } from "react";
import { DrinkItems } from "./DrinkItems";
import { TextInput } from "./ui/TextInput";
import { availableDrinks } from "../utils/data.js";

export const DrinkSearch = ({ onClick }) => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };
  const matchedDrinks = availableDrinks.filter((drink) => {
    return drink.name
      .toLocaleLowerCase()
      .includes(searchField.toLocaleLowerCase());
  });

  return (
    <>
      <label>Search for drink:</label>
      <TextInput onChange={handleChange} w={200} mb={8} />
      <DrinkItems onClick={onClick} drinks={matchedDrinks} />
    </>
  );
};
