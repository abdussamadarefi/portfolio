import React from 'react'
import { TabPane, Button } from 'reactstrap'
import LinkButton from './link-button'
const Portfolio = () => {
  return (
    <TabPane tabId="1">
    <h4 className='mb-2'>abdussamadarefi - Portfolio</h4>
        <div className='d-flex'>
            <LinkButton
                name='Demo'
                color="success"
                href='https://abdussamadarefi.vercel.app'
            />
            <LinkButton
                name='Github'
                color=''
                href='https://github.com/abdussamadarefi/portfolio'
            />
        </div>
        <div className='lead'>
            <p>
            This portfolio project is a personal website showcasing my professional background, skills, and projects. It is designed to provide a comprehensive overview of my work and make it easy for potential employers and collaborators to connect with me. The site is built with a modern, responsive design to ensure it looks great on any device.
            </p>
        </div>
        <div className='lead'>
            <h5 className='fw-semibold'>Key Features:</h5>
            <ul>
                <li><strong>Personal Information:</strong>Detailed sections about my background, skills, and experiences.</li>
                <li><strong>Projects Showcase:</strong>Highlights various projects I have worked on, including descriptions, technologies used, and links to the project repositories.</li>
                <li><strong>Responsive Design:</strong>Ensures the website is fully responsive and provides a seamless user experience on desktops, tablets, and mobile devices.</li>
            </ul>
        </div>
        <div className='lead'>
            <h5>Technologies Used:</h5>
            <div className='d-flex gap-2'>
                <Button type='button' color='none' className=''>React</Button>
                <Button type='button' color='none' className=''>JavaScript</Button>
                <Button type='button' color='none' className=''>Bootstrap</Button>
                
            </div>
        </div>
        
    </TabPane>
  )
}

export default Portfolio