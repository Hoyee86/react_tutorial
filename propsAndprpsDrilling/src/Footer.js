import React from 'react'

const Footer = ({length}) => {
    // const currentYear = new Date();
  return (
    <footer>
        <p>{length} List {
          length === 1? 'item' : 'items' //this ternary condition shows plural form of list if the item are more than one & just only list if otherwise
        }</p>
    </footer>
  );
};

export default Footer
