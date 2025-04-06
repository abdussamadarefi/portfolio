import React, { useState } from 'react'
import {TabPane} from 'reactstrap'
import LinkButton from './link-button'

const GenerateColors = () => {
  return (
    <TabPane tabId="1">
    <h4 className='mb-2'>Color Generator: Generate color and pick</h4>
        <div className='d-flex'>
            <LinkButton
                name='Demo'
                color="success"
                href='https://generate-color-and-pick.netlify.app/'
            />
            <LinkButton
                name='Github'
                color=''
                href='https://github.com/abdussamadarefi/color-generator'
            />
        </div>
        <div>
            <p className='lead'>
            The Color Generator is a web-based application designed to generate random colors and allow users to copy their hex and rgb codes effortlessly. Created using HTML, CSS, and JavaScript, this project highlights the power of fundamental web technologies in building an interactive and practical tool. The source code is openly available on GitHub, making it an excellent resource for learning and exploration.
            </p>
        </div>
        <div>
            <h5>Features and Functionality</h5>
            <p className='lead '>
            When you visit the site, you're greeted with a clean and intuitive interface. The core feature is a "Generate Color" button—clicking it instantly changes the box's color to a randomly generated color and displays its hex and rgb code in input field (e.g., <span style={{backgroundColor: '#f1c40f'}}>#f1c40f</span>). Next to the codes, there is a "Copy" button, which copies the code to your clipboard with a single click, complete with a brief "Copied!" confirmation, and a "Save" button, which saves the code to custom color preset. This simplicity makes it a handy tool for designers and developers needing quick color inspiration or codes for their projects.
            </p>
        </div>
        <div>
            <h5>Tech Stacks</h5>
            <ul>
            <li className='fs-6'><strong>HTML</strong></li>
            <li className='fs-6'><strong>CSS</strong></li>
            <li className='fs-6'><strong>JavaScript</strong></li>
            </ul>
        </div>
    </TabPane>
  )
}


export default GenerateColors