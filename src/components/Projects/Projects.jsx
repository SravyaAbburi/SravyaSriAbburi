import React from 'react'
import './projects.css'
import projectsData from './ProjectsData' 
import { Slide } from "react-awesome-reveal";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';


const Projects = () => {
  return (
  <section className="projects section" id="projects">
   <Slide direction="left" triggerOnce>
  <h2 className='section__title'>Projects</h2>
  </Slide>
  <Slide direction="right" triggerOnce>
  <span className='section__subtitle'>My Projects</span>
  </Slide>

  <Slide direction="left" triggerOnce>

  <Container className='p-4'>
      <Row>
       {
        projectsData.map(project =>{
          return (
            <Col lg={4} md={4} sm={6} key={project.id}>
        <div className="projects__card">
        <Card >
        <Card.Img variant="top" src={project.img} className='projects__card-img'/>
         <Card.Body>
        <Card.Title className='projects__card-title'>{project.title}</Card.Title>
        <Card.Text className='projects__card-data'>
          {project.description}
        </Card.Text>
        <div className='projects__link'>
        <a href={project.sourcecode} className="projects__card-link" >Source Code</a>
        </div>
       
      </Card.Body>
    </Card>
        </div>
        </Col>
          )
        })
       }
      </Row>
    </Container>
</Slide>
  </section>
  )
}

export default Projects