import "./App.css";
import { DrinkChoice } from "./components/DrinkChoice";
import { useState } from "react";
import { DrinkSearch } from "./components/DrinkSearch";
import { Center, Heading } from "@chakra-ui/react";

export const App = () => {
  const greeting = "Hello, welcome to Winc Café";
  const [userDrink, setUserDrink] = useState();

  return (
    <Center w="100vw" h="100vh" flexDir={"column"}>
      {userDrink ? (
        <DrinkChoice drink={userDrink} onClick={setUserDrink} />
      ) : (
        <>
          <Heading mb={8} fontSize={"3xl"} color="blue.800">
            {greeting}
          </Heading>
          <DrinkSearch onClick={setUserDrink} />
        </>
      )}
    </Center>
  );
};
