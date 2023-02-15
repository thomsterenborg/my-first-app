import "./App.css";
import { DrinkButtons } from "./components/DrinkButtons";
import { DrinkChoice } from "./components/DrinkChoice";
import { coffee, tea } from "./utils/data";

export const App = () => {
  const greeting = "Hello, welcome to Winc Café";
  const userDrink = undefined;

  return (
    <div className="app">
      {userDrink ? (
        <DrinkChoice drink={userDrink} />
      ) : (
        <>
          <h1>{greeting}</h1>
          <DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
        </>
      )}
    </div>
  );
};
