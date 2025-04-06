import React, { Component } from 'react'
import Navbar from './Components/nav-bar'
import Projects from './Components/project'
import About from './Components/about'

class App extends Component {
  state = {
    isProjectOpen: false,
    isAboutOpen: false,
  }


  toggleProject = ()=>{
    this.setState({
      isProjectOpen: !this.state.isProjectOpen
    })
  }
  toggleAbout = ()=>{
    this.setState({
      isAboutOpen: !this.state.isAboutOpen
    })
  }
  render() {


    return (
      <div className='main-container'>
      <Navbar
        toggleProject={this.toggleProject}
        toggleAbout={this.toggleAbout}

      />







    {/**
    Modals will go here
    */}
      <Projects
        isProjectOpen={this.state.isProjectOpen}
        toggleProject={this.toggleProject}
      />
      <About
        isAboutOpen={this.state.isAboutOpen}
        toggleAbout={this.toggleAbout}
      />
      </div>
    )
  }
}

export default App