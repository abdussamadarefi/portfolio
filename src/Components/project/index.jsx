import React, {useState} from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import GenerateColors from './generate-color-&-pick'
import ProjectNav from './project-nav'


const Projects =  ({isProjectOpen, toggleProject}) =>{
  //state for active tab
    const [activeTab, setActiveTab] = useState('1')
  
    // Function to toggle tabs
    const toggleTab = (tab) => {
      if (activeTab !== tab) setActiveTab(tab)
    }
    return (
        <Modal
        
        isOpen={isProjectOpen}
        toggle={toggleProject}
        size='lg'
        contentClassName='window glass active'
        >
          <ModalHeader 
          className='title-bar' 
          toggle={toggleProject} 
          close={
            <div class="title-bar-controls">
            <button aria-label='Close' onClick={toggleProject}></button>
            </div>
           }>
           <div className="title-bar-text">Journey Stopage</div>
            
          </ModalHeader>
          <ModalBody className='window-body has-space'>
            <ProjectNav
              activeTab={activeTab}
              toggleTab={toggleTab}
            />

          </ModalBody>
        </Modal>
    )
  }


export default Projects