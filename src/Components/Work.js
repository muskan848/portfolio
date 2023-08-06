import './WorkCard.css'
import React from 'react'
import WorkCardData from './WorkCardData'
import WorkCard from './WorkCard'

const Work = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'> Projects </h1>
        <div className='project-container'>
            {WorkCardData.map((val,idx)=>{
                return(
                    <WorkCard
                    key ={idx}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default Work;
