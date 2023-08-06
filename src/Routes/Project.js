import React from 'react'
import HeroImg2 from '../Components/HeroImg2.js'
import PricingCard from '../Components/PricingCard.js'
import Work from '../Components/Work.js'

const Project = () => {
  return (
    <div>
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works." />
      <Work/>
      <PricingCard/>
    </div>
  )
}

export default Project
