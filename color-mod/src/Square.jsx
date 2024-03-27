import React from 'react'

const Square = ({colorValue, hexValue, isDarkText}) => {
  return (
    <section className='square' style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000" : "#FFF"  //this condition changes the color value on the UI from default black to white
    }}>
      
      <p>{colorValue ? colorValue: "Empty Value"} </p>
      <p>{hexValue ? hexValue: "null"} </p>
    </section>
  );
};

Square.defaultProps = {
    colorValue: "Empty Color Value",
}

export default Square
 