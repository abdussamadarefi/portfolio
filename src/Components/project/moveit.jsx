import React from 'react'
import { TabPane, Button } from 'reactstrap'
import LinkButton from './link-button'
const Moveit = () => {
  return (
    <TabPane tabId="2">
    <h4 className='mb-2'>Moveit - Responsive Courier Website</h4>
        <div className='d-flex'>
            <LinkButton
                name='Demo'
                color="success"
                href='https://moveit-live.netlify.app/'
            />
            <LinkButton
                name='Github'
                color=''
                href='https://github.com/abdussamadarefi/moveit'
            />
        </div>
        <div className='lead'>
            <p>
            Moveit is a responsive website designed for courier services. The project aims to provide a seamless and user-friendly experience for customers looking to utilize courier services. This website is built with a focus on responsiveness, ensuring it looks and functions well on a variety of devices, including desktops, tablets, and mobile phones.
            </p>
        </div>
        <div className='lead'>
            <h5 className='fw-semibold'>Key Features:</h5>
            <ul>
                <li><strong>Responsive Design:</strong>The website layout adjusts smoothly to different screen sizes, providing an optimal viewing experience across various devices.</li>
                <li><strong>Modern UI/UX:</strong>The design incorporates modern web standards and practices to deliver an intuitive user interface and user experience.</li>
                <li><strong>Efficient Styling:</strong>The website utilizes CSS and SCSS for efficient styling, making it easy to maintain and extend.</li>
            </ul>
        </div>
        <div className='lead'>
            <h5>Technologies Used:</h5>
            <div className='d-flex gap-2'>
                <Button type='button' color='none' className=''>HTML</Button>
                <Button type='button' color='none' className=''>CSS</Button>
                <Button type='button' color='none' className=''>SASS</Button>
                <Button type='button' color='none' className=''>JavaScript </Button>
            </div>
        </div>
        <div className='lead mt-3'>
            <h5>Project Highlights:</h5>
            <ol>
                <li>Developed a fully responsive courier service website.</li>
                <li>Implemented modern design principles to enhance user experience.</li>
                <li>Utilized CSS and SCSS for scalable and maintainable styling.</li>
                <li>Incorporated basic JavaScript for interactive elements.</li>
            </ol>
        </div>
    </TabPane>
  )
}

export default Moveit