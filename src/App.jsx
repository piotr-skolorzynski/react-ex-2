import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

const App = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration > 0;

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: Number(newValue),
      };
    });
  };

  return (
    <>
      <Header />

      <UserInput onChange={handleChange} userInput={userInput} />

      {inputIsValid ? (
        <Results input={userInput} />
      ) : (
        <p className="center">Please enter duration greater than zero.</p>
      )}
    </>
  );
};

export default App;
