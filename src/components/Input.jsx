// import React from "react";
import UseStorage from "./UseStorage"; // Import the external CSS file

const Input = () => {
  const [inputFieldValue, setInputFieldValue] = UseStorage("inputValue");

  const onInputChange = (e) => {
    const newValue = e.target.value;
    setInputFieldValue(newValue);
  };

  return (
    <div className="container">
      <label htmlFor="textField" className="label">
        Text Field:
      </label>
      <input
        type="text"
        id="textField"
        value={inputFieldValue}
        onChange={onInputChange}
        className="textInput"
      />
      <p className="valueDisplay">Value: {inputFieldValue}</p>
    </div>
  );
};

export default Input;
