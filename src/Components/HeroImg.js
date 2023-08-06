import React from 'react'
import './HeroImg.css'
import {Link} from 'react-router-dom'
import IntroImg from '../assets/intro-bg.jpg';

const HeroImg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
          <img className='intro-img' src={IntroImg} alt='intro image'/>     
        </div> 
        <div className='content'>
            <p>Hi, I am a Software Developer</p>
            <h1>Frontend Developer</h1>
            <div>
                <Link to="/projects" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>

        </div>
      
    </div>
  )
}

export default HeroImg
