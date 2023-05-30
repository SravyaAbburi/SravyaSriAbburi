import React from 'react'

const Data = () => {
  return (
    <div className='home__data'>
        <h1 className='home__title'>Sravya Sri Abburi
        
        </h1>
        <h3 className='home__subtitle'>Machine Learning Engineer</h3>
        <p className='home__description'>I'm a machine learning engineer passionate about solving problems in the field of AI</p>
        
        <span className='home__tech'>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" alt='python logo' className='home__tech__icon' />  
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original-wordmark.svg" alt='numpy logo' className='home__tech__icon'/>
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg" alt='pandas logo' className='home__tech__icon'/>  
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original-wordmark.svg" alt='tensorflow logo' className='home__tech__icon'/> 
        {/*<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original-wordmark.svg" alt='pytorch logo' className='home__tech__icon'/> */}
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original-wordmark.svg" alt='opencv logo' className='home__tech__icon' />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg" alt='jupyter logo'  className='home__tech__icon'/></span>
       
    </div>
    
  )
}

export default Data