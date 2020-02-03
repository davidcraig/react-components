import React from 'react'
import PropTypes from 'prop-types'

/**
 * Brand
 * @param { Object } props
 * @param { String='/' } props.href - Location where the brand should link to
 * @param { String } props.title - Brand name
 */
export function Brand (props) {
  return <div className='navbar-brand'>
    <a href={props.href ? props.href : '/'} className='navbar-item'>{props.title}</a>
  </div>
}
Brand.propTypes = {
  title: {
    type: PropTypes.string,
    required: true
  },
  href: {
    type: PropTypes.string,
    required: false
  }
}

/**
 * Dropdown
 * @param { Object } props
 * @param { String } props.title - Dropdown link title
 * @param { Object } props.children - Navbar Items
 */
export function Dropdown (props) {
  return <div className="navbar-item has-dropdown is-hoverable">
    <a className="navbar-link">
      {props.title}
    </a>

    <div className="navbar-dropdown">
      {props.children}
    </div>
  </div>
}
Dropdown.propTypes = {
  children: {},
  title: {
    type: PropTypes.string,
    required: true
  }
}

/**
 * Navbar End
 * Items at the end of the navbar (right side).
 * @param {*} props
 */
export function End (props) {
  return <div className='navbar-end'>
    {props.children}
  </div>
}
End.propTypes = {
  children: {}
}

/**
 * Navbar Start
 * Items on the left side of the navbar.
 * @param {*} props
 */
export function Start (props) {
  return <div className='navbar-start'>
    {props.children}
  </div>
}
Start.propTypes = {
  children: {}
}

/**
 * Navbar Item
 * @param {*} props
 * @param { String } props.href - Link location.
 * @param { String } props.title - Link title.
 */
export function Item (props) {
  return <a href={props.href} className={`navbar-item ${props.className}`}>{props.title}</a>
}
Item.propTypes = {
  title: {
    type: PropTypes.string,
    required: true
  },
  className: {
    type: PropTypes.string,
    required: false
  },
  href: {
    type: PropTypes.string,
    required: true
  }
}

/**
 * Navbar
 * @param {*} props
 */
export default function Navbar (props) {
  return <div className={props.dark ? 'navbar is-dark' : 'navbar'}>
    {props.children}
  </div>
}
Navbar.propTypes = {
  children: {},
  dark: {
    type: PropTypes.boolean,
    required: false
  }
}
