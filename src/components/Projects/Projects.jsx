import React from 'react'
import './projects.css'
import projectsData from './ProjectsData' 

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



const Projects = ({ sourcecode }) => {
  
  const openHtmlFileOrWebsiteInNewTab = (sourcecode) => {
    if (sourcecode) {
      const newWindow = window.open('', '_blank');
      if (newWindow) {
        // Check if sourcecode is a website URL
        if (sourcecode.startsWith('http://') || sourcecode.startsWith('https://')) {
          newWindow.location.href = sourcecode; // Redirect to the website
        } else {
          // Assuming sourcecode is a path to an HTML file in the public folder
          fetch(process.env.PUBLIC_URL + sourcecode)
            .then(response => response.text())
            .then(htmlContent => {
              newWindow.document.open();
              newWindow.document.write(`
                <html>
                  <head></head>
                  <body>
                    <div dangerouslySetInnerHTML={{ __html: '${htmlContent}' }}></div>
                  </body>
                </html>
              `);
              newWindow.document.close();
            })
            .catch(error => {
              console.error('Error loading HTML:', error);
            });
        }
      } else {
        console.error('Unable to open new window.');
      }
    } else {
      console.error('No sourcecode provided.');
    }
  };
  
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
                <button onClick={() => openHtmlFileOrWebsiteInNewTab(sourcecode)} className="projects_social-icon">
                <i className="uil uil-globe"></i></button>
                  
          
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