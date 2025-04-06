import React from "react"
import { Modal, ModalHeader, ModalBody } from "reactstrap"
import LinkButton from "../project/link-button"

const About =  ({isAboutOpen, toggleAbout}) =>{
    return (
        <Modal
        
        isOpen={isAboutOpen}
        toggle={toggleAbout}
        size='lg'
        contentClassName='window glass active'
        >
          <ModalHeader 
          className='title-bar' 
          toggle={toggleAbout} 
          close={
            <div class="title-bar-controls">
            <button aria-label='Close' onClick={toggleAbout}></button>
            </div>
           }>
           <div className="title-bar-text">Know Developer</div>
            
          </ModalHeader>
          <ModalBody className='window-body has-space'>
          <h2>Abdus Samad Arefi</h2>
          <div className="d-flex">
          <LinkButton name='Facebook' className='btn-secondary' href={'https://facebook.com/abdussamadarefi/'} />
          <LinkButton name='Linkedin' href={'https://www.linkedin.com/in/muhammad-abdus-samad-6a4833219/'} color={'bg-primary'}/>
          <LinkButton name='Github' href={'https://github.com/abdussamadarefi'} color={'bg-gray'}/>
          </div>
          
            <p className="lead">
            Hey! This is <span className="fw-semibold">Abdus Samad Arefi</span>, a dedicated web developer with a passion for creating responsive and user-friendly web applications. With a strong background in front-end development, I specialize in crafting visually appealing and highly functional websites that cater to the needs of users and clients.
            </p>

          </ModalBody>
        </Modal>
    )
  }


export default About