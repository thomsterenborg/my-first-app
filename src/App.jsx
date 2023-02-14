import "./App.css";
import { DrinkButtons } from "./components/DrinkButtons";

export const App = () => {
  const greeting = "Hello, welcome to Winc Café";

  return (
    <div className="app">
      <h1>{greeting}</h1>
      <DrinkButtons />
    </div>
  );
};
