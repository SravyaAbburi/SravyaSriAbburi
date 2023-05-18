import React from 'react'
import './skills.css'
import MachineLearning from './MachineLearning'
import Other from './Other'
import { Slide } from "react-awesome-reveal";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
    <Slide direction="left" triggerOnce>
        <h2 className='section__title'>Skills</h2>
        </Slide>
        <Slide direction="right" triggerOnce>
        <span className='section__subtitle'>My technical expertise</span>
        </Slide>
        <div className="skills__container container grid">
        <Slide direction="left" triggerOnce>
           <MachineLearning />
           </Slide>
           <Slide direction="right" triggerOnce>
           <Other/>
           </Slide>
        </div>
    </section>
  )
}

export default Skills
