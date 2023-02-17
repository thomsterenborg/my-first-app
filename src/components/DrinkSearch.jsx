import { useState } from "react";
import { DrinkItems } from "./DrinkItems";
import { TextInput } from "./ui/TextInput";
import { availableDrinks } from "../utils/data.js";

export const DrinkSearch = ({ onClick }) => {
  const [searchField, setSearchField] = useState("test drink");

  return (
    <>
      <label>Search for drink:</label>
      <TextInput />
      <DrinkItems onClick={onClick} drinks={availableDrinks} />
    </>
  );
};
