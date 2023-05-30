import React from 'react'
import './projects.css'
import projectsData from './ProjectsData' 

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";



const Projects = () => {
  return (
  <section className="projects container section" id="projects">
   
  <h2 className='section__title'>Projects</h2>
 
 
  <span className='section__subtitle'>My Projects</span>

  <Swiper
          className="projects__container"
          
          grabCursor={true}
          spaceBetween={24}
          pagination={{ clickable: true }}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
          }}
          modules={[Pagination]}
        >
         {projectsData.map(({ id, title,description,sourcecode,img, techstack }) => {
            return (
              <SwiperSlide className="projects__card" key={id}>
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
              </SwiperSlide>
            );
          })}
        </Swiper>
  

  

  </section>
  )
}

export default Projects