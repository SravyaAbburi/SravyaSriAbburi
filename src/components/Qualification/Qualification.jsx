import React, { useState } from 'react'
import './qualification.css'


const Qualification = () => {
    const  [toggleState,setToggleState]=useState(1);
    const toggleTab=(index)=>{
        setToggleState(index)
    }
  return (
  <section className="qualification section" id='qualification'>
  
    <h2 className="section__title">Qualification</h2>
   
    
    <span className='section__subtitle'>My Personal Journey</span>
  
    <div className="qualification__container container">
        <div className="qualification__tabs">
            <div className=
            {toggleState===1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
            onClick={()=>toggleTab(1)}
            >
                <i className="uil uil-graduation-cap qualification__icon"></i>Education
            </div>
            <div className={toggleState===2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={()=>toggleTab(2)}>
                <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
            </div>
        </div>
        
        <div className="qualification__sections">
            <div className={toggleState===1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">PGP in AI & ML</h3>
                        <span className="qualification__subtitle">Purdue University</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i> May 2023-Oct 2023
                        </div>
                    </div>
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>
                <div className="qualification__data">
                <div></div>
                <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                    <div>
                        <h3 className="qualification__title">Btech CSE</h3>
                        <span className="qualification__subtitle">JNTU University</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i> Sep 2013-Apr 2017
                        </div>
                    </div>
                   
                </div>
            </div>

            <div className={toggleState===2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title">Associate Consultant</h3>
                        <span className="qualification__subtitle">TIBCO Software</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i> July 2017-Apr 2021
                        </div>
                    </div>
                    <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                </div>
                <div className="qualification__data">
                <div></div>
                <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                    </div>
                    <div>
                        <h3 className="qualification__title">Junior Consultant</h3>
                        <span className="qualification__subtitle">TIBCO Software</span>
                        <div className="qualification__calendar">
                            <i className="uil uil-calendar-alt"></i> July 2017-Apr 2021
                        </div>
                    </div>
                   
                </div>
                
            </div>
        </div>
     
    </div>
  </section>
  )
}

export default Qualification