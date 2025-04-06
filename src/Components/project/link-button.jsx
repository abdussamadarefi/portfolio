import React from 'react'
import { NavLink } from 'reactstrap'
import PropTypes from 'prop-types'
const LinkButton = ({href, color, name}) => (
    <a href={href}><button className='mx-2 align-items-center' color={color}>
    {name}
    </button></a>
)
LinkButton.propTypes = {
    href: PropTypes.string,
    color: PropTypes.string,
    name: PropTypes.string
}

export default LinkButton
