import React from 'react'

const Header = (props) => {

  //********Saving inline style in variable********** */
  // const headerStyle = {
  //   background: "royalblue",
  //   color: "goldenrod",
  //   fontSize: "30px"
  // }
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
    
    //********Using VAriable in inline Style***********
    // <header style={headerStyle}>
    //   <h1>Cohort 4.0 student's Details👨‍👩‍👧‍👦👪</h1>
    // </header>
    
    //*******Direct inline Styling**********
    // <header style={{background: "blue", color: "red", fontsize: "24px"}}>
    //   <h1>Cohort 4.0 student's Details👨‍👩‍👧‍👦👪.</h1>
    // </header>
  )
}

export default Header
