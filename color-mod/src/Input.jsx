import React from "react";

const Input = ({
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText
}) => {
  return (
    <form onClick={(e) => e.preventDefault()}>
      <input
        type="text"
        autoFocus
        placeholder="Add Color Name"
        required
        value={colorValue}
        onChange={(e) => 
        setColorValue(e.target.value)
        }

      />
    </form>
  );
};

export default Input;
