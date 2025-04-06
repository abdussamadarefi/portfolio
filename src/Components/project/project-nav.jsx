import React from 'react'
import { Nav, NavItem, NavLink, TabContent } from 'reactstrap'
import GenerateColors from './generate-color-&-pick'
import Moveit from './moveit'
const ProjectNav = ({activeTab, toggleTab}) => {
  return (
    <div>
        <Nav tabs>
            <NavItem>
            <NavLink
                className={activeTab === '1' ? 'active' : ''}
                onClick={()=> toggleTab('1')}
            >
                Stopage-1
            </NavLink>
            </NavItem>
            <NavItem>
            <NavLink
                className={activeTab === '2' ? 'active' : ''}
                onClick={()=> toggleTab('2')}
            >
                Stopage-2
            </NavLink>
            </NavItem>
            <NavItem>
            <NavLink
                className={activeTab === '3' ? 'active' : ''}
                onClick={()=> toggleTab('3')}
            >
                Stopage-3
            </NavLink>
            </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>

        <GenerateColors/>

        <Moveit/>

        </TabContent>
    </div>
  )
}

export default ProjectNav