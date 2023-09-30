import React from 'react'
import kaggle from '../../assets/kaggle.png'

const Social = () => {
  return (
   <div className='home__social'>
   
    <a href='https://www.linkedin.com/in/sravya-abburi-12482b104/' className='home__social-icon' ><i className="uil uil-linkedin"></i></a>
    <a href='https://github.com/SravyaAbburi' className='home__social-icon' > <i className="uil uil-github"></i></a>
    <a href='https://www.kaggle.com/sravyaabburi' className='home__social-icon'><img src={kaggle} alt="kaggle icon" className='kaggle' /></a>
   
   </div>
  )
}

export default Social