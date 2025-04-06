import React from 'react'
import { Button } from 'reactstrap'
import StartIcon from '../../Assets/icons/start-icon.png'
import Projects from '../../Assets/icons/projects.png'
import Skills from '../../Assets/icons/skills.png'
import About from '../../Assets/icons/about.png'
import classes from './index.module.css'




const Navbar = ({toggleProject, toggleSkills, toggleAbout})=> {
    return (
      <nav className={`${classes.navbarBottom} navbar p-0 m-0 navbar-nav navbar-expand-lg fixed-bottom`}>
        <div className="container-fluid ">
          <div className="d-flex ">
                <a className={"navbar-brand p-0 "}  >
                <img width='35' className={classes.startButton} src={StartIcon} alt="" />
                </a>

                <a className="nav-link py-0 me-3" title='Projects' onClick={toggleProject}>
                <img width='35' src={Projects} alt="" />
                </a>

                <a className="nav-link py-0 me-3" title='Skills' onClick={toggleSkills}>
                <img width='35' src={Skills} alt="" />
                </a>

                <a className="nav-link py-0 me-3" title='About'  onClick={toggleAbout}>
                <img width='35' src={About} alt="" />
                </a>
                </div>

                <div className='ms-auto px-3 '>
                   <span className='text-white m-0'>{new Date().toLocaleTimeString()}</span>
                   <br />
                    <span className='text-white m-0'>{new Date().toLocaleDateString()}</span>
                </div>
          
          </div>
        
      </nav>
    )
  }


export default Navbar