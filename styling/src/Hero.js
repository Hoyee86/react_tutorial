import React from 'react'
import './hero.css'

const Hero = () => {


const handleClick = () => {
    console.log("I was clicked!!!")
  }


  return (
   <div className='bro'>
     <div className='hero'>
      <p>You're an Hero💪</p>
    </div>
      <button onClicked = {handleClick}>click me</button>
   </div>
  )
}

export default Hero
