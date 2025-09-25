import { useState } from "react";

const UserInput = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestemnt: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            type="number"
            id="initialInvestment"
            value={userInput.initialInvestment}
            required
            onChange={(event) =>
              handleChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="annualInvestemnt">Annual Investment</label>
          <input
            type="number"
            id="annualInvestemnt"
            value={userInput.annualInvestemnt}
            required
            onChange={(event) =>
              handleChange("annualInvestemnt", event.target.value)
            }
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            type="number"
            id="expectedReturn"
            value={userInput.expectedReturn}
            required
            onChange={() => handleChange("expectedReturn", event.target.value)}
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            id="duration"
            value={userInput.duration}
            required
            onChange={() => handleChange("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
