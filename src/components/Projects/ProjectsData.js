 import project1 from '../../assets/project1.jpg'
 import project2 from '../../assets/project2.jpg'
 import project3 from '../../assets/project3.jpg'
 import project4 from '../../assets/project4.jpg'
 import project5 from '../../assets/project5.jpg'
 import project6 from '../../assets/project6.jpg'
 import project7 from '../../assets/project7.jpg'
 import project8 from '../../assets/project8.jpg'
 import project9 from '../../assets/project9.jpg'
 import project10 from '../../assets/project10.jpg'
 

 

 const projectsData = [
    {
      id: 1,
      title: "Research Paper Summarizer",
      description: "Fine tuned LLama2 model on arXiv data for abstractive summarization",
      sourcecode:"https://huggingface.co/sravya-abburi/LLama2_arXiv_finetuned",
      img:project1,
      techstack:<span className='home__tech'>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" alt='python logo' className='project__tech__icon' />  
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original-wordmark.svg" alt='numpy logo' className='project__tech__icon'/>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg" alt='pandas logo' className='project__tech__icon'/>  
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original-wordmark.svg" alt='tensorflow logo' className='project__tech__icon'/> 
      
     
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg" alt='jupyter logo'  className='project__tech__icon'/></span>
     
    },
    {
      id: 2,
     
      title: "Resume Parser",
      description: "Automatically parses the Resume and does NER on it",
      sourcecode:"https://huggingface.co/spaces/sravya-abburi/ResumeParser",
      img:project2,
      techstack:<span className='home__tech'>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" alt='python logo' className='project__tech__icon' />  
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original-wordmark.svg" alt='numpy logo' className='project__tech__icon'/>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg" alt='pandas logo' className='project__tech__icon'/>  
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original-wordmark.svg" alt='tensorflow logo' className='project__tech__icon'/> 
      
     
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg" alt='jupyter logo'  className='project__tech__icon'/></span>
    },
    {
      id: 3,
     
      title: "Lending Club Loan Data Analysis",
      description: "Create a model that predicts whether or not a loan will be default using the historical data.",
      sourcecode:"https://github.com/SravyaAbburi/LoanAnalysis",
      img:project3,
      techstack:<span className='home__tech'>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" alt='python logo' className='project__tech__icon' />  
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original-wordmark.svg" alt='numpy logo' className='project__tech__icon'/>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg" alt='pandas logo' className='project__tech__icon'/>  
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original-wordmark.svg" alt='tensorflow logo' className='project__tech__icon'/> 
      
     
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg" alt='jupyter logo'  className='project__tech__icon'/></span>
    },
    {
      id: 4,
    
      title: "Perform Facial Recognition with Deep Learning",
      description: "Uses a deep convolutional neural network to perform facial recognition using Keras",
      sourcecode:"",
      img:project4,
      techstack:<span className='home__tech'>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" alt='python logo' className='project__tech__icon' />  
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original-wordmark.svg" alt='numpy logo' className='project__tech__icon'/>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg" alt='pandas logo' className='project__tech__icon'/>  
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original-wordmark.svg" alt='tensorflow logo' className='project__tech__icon'/> 
      
     
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg" alt='jupyter logo'  className='project__tech__icon'/></span>
    },
    {
      id: 5,
      
      title: "Diabetic Retinopathy detection",
      description: "A CNN model using distributed training that can detect diabetic retinopathy ",
      sourcecode:"",
      img:project5,
      techstack:<span className='home__tech'>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" alt='python logo' className='project__tech__icon' />  
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original-wordmark.svg" alt='numpy logo' className='project__tech__icon'/>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg" alt='pandas logo' className='project__tech__icon'/>  
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original-wordmark.svg" alt='tensorflow logo' className='project__tech__icon'/> 
      
     
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg" alt='jupyter logo'  className='project__tech__icon'/></span>
    },
    {
      id: 6,
      
      title: "Emotion Recognition",
      description: "A model using a convolutional neural network that can classify a person's emotion",
      sourcecode:"",
      img:project6,
      techstack:<span className='home__tech'>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" alt='python logo' className='project__tech__icon' />  
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original-wordmark.svg" alt='numpy logo' className='project__tech__icon'/>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg" alt='pandas logo' className='project__tech__icon'/>  
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original-wordmark.svg" alt='tensorflow logo' className='project__tech__icon'/> 
      
     
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg" alt='jupyter logo'  className='project__tech__icon'/></span>
    },
    {
      id: 7,
      
      title: "Detection of Lung Infection",
      description: "A model using a convolutional neural network that can classify lung infection in a person using medical imagery",
      sourcecode:"",
      img:project7,
      techstack:<span className='home__tech'>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" alt='python logo' className='project__tech__icon' />  
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original-wordmark.svg" alt='numpy logo' className='project__tech__icon'/>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg" alt='pandas logo' className='project__tech__icon'/>  
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original-wordmark.svg" alt='tensorflow logo' className='project__tech__icon'/> 
      
     
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg" alt='jupyter logo'  className='project__tech__icon'/></span>
    },
    {
      id: 8,
      
      title: "Healthcare Project",
      description: "robust classification model(s) for identifying 5 types of cancer.",
      sourcecode:"",
      img:project8,
      techstack:<span className='home__tech'>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" alt='python logo' className='project__tech__icon' />  
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original-wordmark.svg" alt='numpy logo' className='project__tech__icon'/>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg" alt='pandas logo' className='project__tech__icon'/>  
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original-wordmark.svg" alt='tensorflow logo' className='project__tech__icon'/> 
      
     
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg" alt='jupyter logo'  className='project__tech__icon'/></span>
    },
    {
      id: 9,
      
      title: "Cyber Security Project",
      description: "Analyzing Book-My-Show datato check whether the particular URL is prone to phishing (malicious) or not.",
      sourcecode:"",
      img:project9,
      techstack:<span className='home__tech'>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" alt='python logo' className='project__tech__icon' />  
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original-wordmark.svg" alt='numpy logo' className='project__tech__icon'/>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg" alt='pandas logo' className='project__tech__icon'/>  
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original-wordmark.svg" alt='tensorflow logo' className='project__tech__icon'/> 
      
     
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg" alt='jupyter logo'  className='project__tech__icon'/></span>
    },
    {
      id: 10,
      
      title: "Retail Project",
      description: "Build a model to do Demand Forecast for Stores",
      sourcecode:"",
      img:project10,
      techstack:<span className='home__tech'>  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" alt='python logo' className='project__tech__icon' />  
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original-wordmark.svg" alt='numpy logo' className='project__tech__icon'/>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg" alt='pandas logo' className='project__tech__icon'/>  
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original-wordmark.svg" alt='tensorflow logo' className='project__tech__icon'/> 
      
     
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original-wordmark.svg" alt='jupyter logo'  className='project__tech__icon'/></span>
    },



  ];

  export default projectsData;

  
  