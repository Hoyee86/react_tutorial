import React from "react";

const Input = (
  colorValue,
  setColorValue,
  setHexValue,
  isDarkText,
  setIsDarkText
) => {
  return (
    <form onClick={(e) => e.preventDefault()}>
        <input type="text"  />
    </form>
  );
};

export default Input;
