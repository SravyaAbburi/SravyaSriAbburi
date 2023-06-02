import React from 'react'
import './projects.css'
import projectsData from './ProjectsData' 

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



const Projects = () => {
  return (
  <section className="projects container section" id="projects">
   
  <h2 className='section__title'>Projects</h2>
 
 
  <span className='section__subtitle'>My Projects</span>
 

  <Swiper
        className="projects__container mySwiper"
        grabCursor={true} 
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
       
        >
         {projectsData.map(({ id, title,description,sourcecode,img, techstack }) => {
            return (
              
              <SwiperSlide  key={id}>
              <div className='grid projects__card'>
              <div>
              <img src={img} alt="img" className="projects__img" />
              </div>
              
              <div className="projects__content">
              <h3 className="projects__name">{title}</h3>
                <p className='project__data'>{description}</p>
                <span className='project__tech'>Techstack: {techstack}</span>
               

                <div>
                  <a
                    href={`${sourcecode}`}
                    className="projects_social-icon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="uil uil-globe"></i>
                  </a>
          
                </div>
              </div>
              </div>
              </SwiperSlide>
           
            );
          })}
        </Swiper>
  

  

  </section>
  )
}

export default Projects