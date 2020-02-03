import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

/**
 * Brand
 * @param { Object } props
 * @param { String='/' } props.href - Location where the brand should link to
 * @param { String } props.title - Brand name
 */
export function Brand (props) {
  return <div className='navbar-brand'>
    <Link to={props.href ? props.href : '/'} className='navbar-item'>{props.title}</Link>
  </div>
}
Brand.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string
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
  children: PropTypes.any,
  title: PropTypes.string.isRequired
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
  children: PropTypes.any
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
  children: PropTypes.any
}

/**
 * Navbar Item
 * @param {*} props
 * @param { String } props.href - Link location.
 * @param { String } props.title - Link title.
 */
export function Item (props) {
  return <Link to={props.href} className={`navbar-item ${props.className}`}>{props.title}</Link>
}
Item.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired
}

/**
 * Navbar
 * @param {*} props
 */
export function Navbar (props) {
  return <div className={props.dark ? 'navbar is-dark' : 'navbar'}>
    {props.children}
  </div>
}
Navbar.propTypes = {
  children: PropTypes.any,
  dark: PropTypes.bool
}

export default Navbar
