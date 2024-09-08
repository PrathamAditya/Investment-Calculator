import { useState } from "react";

export default function UserInputBox() {
  const [inputValue, setIntialValue] = useState({
    intialInvestment: 1000,
    anualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(intialValue, newValue) {
    setIntialValue((previousValue) => {
      return {
        ...previousValue,
        [inputValue]: newValue,
      };
    });
  }

  return (
    <section>
      <div id="user-input">
        <div className="input-group">
          <p>
            <label>Intial Investment</label>
            <input type="text" required></input>
          </p>

          <p>
            <label>Anual Investment</label>
            <input type="text" required></input>
          </p>
        </div>

        <div className="input-group">
          <p>
            <label>Expected Return</label>
            <input type="number" required></input>
          </p>
          <p>
            <label>Duration</label>
            <input type="text" required></input>
          </p>
        </div>
      </div>
    </section>
  );
}
